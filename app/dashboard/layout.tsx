import SideNav from '@/app/ui/dashboard/sidenav'; //Importing the <SideNav /> component into your layout. Any components you import into this file will be part of the layout.
 
export default function Layout({ children }: { children: React.ReactNode }) { //The <Layout /> component receives a children prop. This child can either be a page or another layout. In your case, the pages inside /dashboard will automatically be nested inside a <Layout /> like so:

// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called partial rendering:

// criação da barra lateral e todos os caminhos filhos de /dashboard herdam essa barra lateral assim fazendo uma renderização parcial 

//Since the new layout you've just created (/app/dashboard/layout.tsx) is unique to the dashboard pages, you don't need to add any UI to the root layout above.


  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}