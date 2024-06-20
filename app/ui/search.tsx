'use client';
// "use client"- Este é um componente cliente, o que significa que você pode usar ouvintes de eventos e ganchos.
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce'; //npm i use-debounce 

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Permite ler o caminho do URL atual
  const { replace } = useRouter(); //  Permite a navegação entre rotas dentro dos componentes do cliente de forma programática A URL é atualizada sem recarregar a página
 

  const handleSearch = useDebouncedCallback((term) => {

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

      />


      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
