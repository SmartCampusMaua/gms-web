'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
//          Link            ############################################################################################################


// To link between pages, you'd traditionally use the <a> HTML element. At the moment, the sidebar links use <a> elements, but notice what happens when you navigate between the home, invoices, and customers pages on your browser.

// Did you see it?

// There's a full page refresh on each page navigation!

// In Next.js, you can use the <Link /> Component to link between pages in your application. <Link> allows you to do client-side navigation with JavaScript.

// To use the <Link /> component, open /app/ui/dashboard/nav-links.tsx, and import the Link component from next/link. Then, replace the <a> tag with <Link>:


// As you can see, the Link component is similar to using <a> tags, but instead of <a href="…">, you use <Link href="…">.

// Save your changes and check to see if it works in your localhost. You should now be able to navigate between the pages without seeing a full refresh. Although parts of your application are rendered on the server, there's no full page refresh, making it feel like a web app. Why is that?
// Automatic code-splitting and prefetching
// To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on initial load.

// Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work.

// Furthermore, in production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

// Learn more about how navigation works.


// What does Next.js do when a <Link> component appears in the browser’s viewport in a production environment?
// Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!


// Next.js pré-busca automaticamente o código da rota vinculada em segundo plano. No momento em que o usuário clicar no link, o código da página de destino já estará carregado em segundo plano, e é isso que torna a transição da página quase instantânea!

// ######################################################################################################################################
import { usePathname } from 'next/navigation'; // Next.js provides a hook called usePathname() that you can use to check the path and implement this pattern.
import clsx from 'clsx'; // css modulável
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // <a
          <Link // trocando <a por link
            key={link.name}
            href={link.href}
            // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"

            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href, // quando estiver selecionado o topico ele fica com o texto e o fundo azul 
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          {/* </a> */}
          </Link> // trocando <a por link
        );
      })}
    </>
  );
}
