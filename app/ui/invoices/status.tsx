import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// There may be cases where you may need to conditionally style an element based on state or some other condition.
// clsx is a library that lets you toggle class names easily. We recommend taking a look at documentation for more details, but here's the basic usage:
// Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
// If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.
// You can use clsx to conditionally apply the classes, like this:
// Usando a biblioteca clsx para alternar nomes de classes Pode haver casos em que você precise estilizar condicionalmente um elemento com base no estado ou em alguma outra condição. clsx é uma biblioteca que permite alternar facilmente os nomes das classes. Recomendamos dar uma olhada na documentação para mais detalhes, mas aqui está o uso básico: Suponha que você queira criar um componente InvoiceStatus que aceite status. O status pode ser 'pendente' ou 'pago'. Se for 'pago', você deseja que a cor seja verde. Se estiver 'pendente', você deseja que a cor seja cinza. Você pode usar clsx para aplicar condicionalmente as classes, assim:
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
