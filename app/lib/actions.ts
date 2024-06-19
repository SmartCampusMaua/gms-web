'use server';
// Ao adicionar o 'use server', você marca todas as funções exportadas no arquivo como funções de servidor. Essas funções de servidor podem então ser importadas para componentes Cliente e Servidor, tornando-os extremamente versáteis.

// Você também pode escrever Ações do Servidor diretamente dentro dos Componentes do Servidor adicionando "use server" dentro da ação. Mas para este curso, manteremos todos organizados em um arquivo separado.

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
//Next.js possui um cache de roteador do lado do cliente que armazena os segmentos da rota no navegador do usuário por um tempo. Junto com a pré-busca , esse cache garante que os usuários possam navegar rapidamente entre as rotas enquanto reduz o número de solicitações feitas ao servidor. Como você está atualizando os dados exibidos na rota de faturas, você deseja limpar esse cache e acionar uma nova solicitação ao servidor. Você pode fazer isso com a revalidatePathfunção do Next.js:
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice'); //gerando um erro proposital
    //Agora, vamos verificar o que acontece quando um erro é gerado na sua ação do servidor. Você pode fazer isso lançando um erro anteriormente 

    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Invoice.' };
      }
}
const FormSchema = z.object({ // Este esquema irá validar formDataantes de salvá-lo em um banco de dados.
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.', // criando uma mensagem de erro caso  o usuario digite um dado sem ser string
      }),
    amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
      }),
    date: z.string(),
});


const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };
// export async function createInvoice(formData: FormData) {
export async function createInvoice(prevState: State, formData: FormData) {
    //   const rawFormData = {
    const validatedFields = CreateInvoice.safeParse({ // safeParse() will return an object containing either a success or error field. This will help handle validation more gracefully without having put this logic inside the try/catch block.
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

  //---------------------------OLD---------------------------------

//   const { customerId, amount, status } = CreateInvoice.parse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
// });
    // const amountInCents = amount * 100;
    // const date = new Date().toISOString().split('T')[0];
    // //   Test it out:
    // //   console.log(rawFormData);
    // console.log(customerId)
    // console.log(amount)
    // console.log(status)

    // try {
    //     await sql`
    //     INSERT INTO invoices (customer_id, amount, status, date)
    //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    //     `;
    // } catch (error) {
    //     return {
    //         message: 'Database Error: Failed to Create Invoice.',
    //     };
    // }
    // revalidatePath('/dashboard/invoices');
    // redirect('/dashboard/invoices');

    //Next.js possui um cache de roteador do lado do cliente que armazena os segmentos da rota no navegador do usuário por um tempo. Junto com a pré-busca , esse cache garante que os usuários possam navegar rapidamente entre as rotas enquanto reduz o número de solicitações feitas ao servidor. Como você está atualizando os dados exibidos na rota de faturas, você deseja limpar esse cache e acionar uma nova solicitação ao servidor. Você pode fazer isso com a revalidatePathfunção do Next.js:

}



// É bom saber : em HTML, você passaria uma URL para o actionatributo. Este URL seria o destino para onde os dados do seu formulário deveriam ser enviados (geralmente um endpoint da API).

// No entanto, no React, o actionatributo é considerado um suporte especial - o que significa que o React é construído sobre ele para permitir que ações sejam invocadas.

// Nos bastidores, as ações do servidor criam um POSTendpoint de API. É por isso que você não precisa criar endpoints de API manualmente ao usar ações do servidor.


export async function updateInvoice(id: string,
    prevState: State,
    formData: FormData,
  ) {
    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      };
    }
   
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
   
    try {
      await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update Invoice.' };
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');



    // -----------------------OLD-----------------------
    // const { customerId, amount, status } = UpdateInvoice.parse({
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    // });

    // const amountInCents = amount * 100;
    // try {
    //     await sql`
    //   UPDATE invoices
    //   SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    //   WHERE id = ${id}
    // `;
    // } catch (error) {
    //     return { message: 'Database Error: Failed to Update Invoice.' };
    // }
    // revalidatePath('/dashboard/invoices');
    // redirect('/dashboard/invoices');
}