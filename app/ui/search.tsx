'use client';
// "use client"- Este é um componente cliente, o que significa que você pode usar ouvintes de eventos e ganchos.
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce'; //npm i use-debounce 

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Permite ler o caminho do URL atual
  const { replace } = useRouter(); //  Permite a navegação entre rotas dentro dos componentes do cliente de forma programática A URL é atualizada sem recarregar a página
    //   Quando usar o useSearchParams()gancho versus o searchParams suporte?

    // Você deve ter notado que usou duas maneiras diferentes de extrair parâmetros de pesquisa. Se você usa um ou outro depende se você está trabalhando no cliente ou no servidor.

    // <Search>é um componente cliente, então você usou o useSearchParams()gancho para acessar os parâmetros do cliente.
    // <Table>é um componente de servidor que busca seus próprios dados, para que você possa passar a searchParamspropriedade da página para o componente.
    // Como regra geral, se você quiser ler os parâmetros do cliente, use o useSearchParams()gancho, pois evita ter que voltar ao servidor.



  const handleSearch = useDebouncedCallback((term) => {

  // function handleSearch(term: string) {
    //Explicação da função
      // ${pathname}é o caminho atual, no seu caso, "/dashboard/invoices".
      // À medida que o usuário digita na barra de pesquisa, params.toString()traduz essa entrada em um formato compatível com URL.
      // replace(${pathname}?${params.toString()})atualiza o URL com os dados de pesquisa do usuário. Por exemplo, /dashboard/invoices?query=leese o usuário pesquisar por “Lee”.
      // A URL é atualizada sem recarregar a página, graças à navegação do lado do cliente do Next.js (que você aprendeu no capítulo sobre navegação entre páginas ).
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams); //URLSearchParamsé uma API da Web que fornece métodos utilitários para manipular os parâmetros de consulta de URL. Em vez de criar uma string literal complexa, você pode usá-la para obter a string de parâmetros como ?page=1&query=a. ----- traduz essa entrada em um formato compatível com URL
    params.set('page', '1');

    if (term) {
      params.set('query', term); 
    } else { //Se a entrada estiver vazia
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); //A URL é atualizada sem recarregar a página, graças à navegação do lado do cliente do Next.js 

  }, 300); // só atualiza se o usuario ficar sem digitar por 300ms

  // Você está atualizando o URL a cada pressionamento de tecla e, portanto, consultando seu banco de dados a cada pressionamento de tecla! Isso não é um problema, pois nosso aplicativo é pequeno, mas imagine se seu aplicativo tivesse milhares de usuários, cada um enviando uma nova solicitação ao seu banco de dados a cada pressionamento de tecla. Debouncing é uma prática de programação que limita a taxa na qual uma função pode ser acionada. No nosso caso, você só deseja consultar o banco de dados quando o usuário parar de digitar.

  // Como funciona a depuração:

  // Evento de gatilho : quando ocorre um evento que deveria ser cancelado (como um pressionamento de tecla na caixa de pesquisa), um cronômetro é iniciado.
  // Aguardar : Se um novo evento ocorrer antes do cronômetro expirar, o cronômetro será redefinido.
  // Execução : Se o cronômetro atingir o final de sua contagem regressiva, a função debounce é executada.

  // Ao debouncing, você pode reduzir o número de solicitações enviadas ao seu banco de dados, economizando recursos.




  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input ///<input>- Esta é a entrada de pesquisa.

        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {{/* onChange será invocado handleSearchsempre que o valor de entrada for alterado. */}
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}

        //defaultValue vs. value / Controlled vs. Uncontrolled

        // If you're using state to manage the value of an input, you'd use the value attribute to make it a controlled component. This means React would manage the input's state.

        // However, since you're not using state, you can use defaultValue. This means the native input will manage its own state. This is okay since you're saving the search query to the URL instead of state.
      />


      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
