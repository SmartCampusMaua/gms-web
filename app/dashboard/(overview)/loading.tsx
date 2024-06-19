// export default function Loading() {
//     return <div>Loading...</div>;
//   }


//   loading.tsx é um arquivo Next.js especial criado com base no Suspense, que permite criar uma interface de usuário substituta para ser exibida como uma substituição enquanto o conteúdo da página é carregado.

// Como <SideNav> é estático, é mostrado imediatamente. O usuário pode interagir <SideNav>enquanto o conteúdo dinâmico está sendo carregado.

// O usuário não precisa esperar que a página termine de carregar antes de sair (isso é chamado de navegação interrompível).
// Você acabou de implementar o streaming. Mas podemos fazer mais para melhorar a experiência do usuário. Vamos mostrar um esqueleto de carregamento em vez do Loading…texto.

import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() {
  return <DashboardSkeleton />;
}

// mostra os espaços vazios sem o dado (apenas as caixas onde eles ficariam)

// Como loading.tsxé um nível superior /invoices/page.tsxe /customers/page.tsxno sistema de arquivos, também se aplica a essas páginas.

// Podemos mudar isso com Grupos de Rotas. Crie uma nova pasta chamada /(overview)dentro da pasta do painel. Em seguida, mova seus arquivos loading.tsx e page.tsx para dentro da pasta:

// Agora, o loading.tsxarquivo será aplicado apenas à página de visão geral do painel.

// Os grupos de rotas permitem organizar arquivos em grupos lógicos sem afetar a estrutura do caminho da URL. Ao criar uma nova pasta usando parênteses (), o nome não será incluído no caminho do URL. Assim /dashboard/(overview)/page.tsxse torna /dashboard.