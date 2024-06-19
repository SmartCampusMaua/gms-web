import '@/app/ui/global.css';
import { Metadata } from 'next';

import { inter } from '@/app/ui/fonts';// importando a fonte do arquivo de fontes
// This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your <html> and <body> tags, and add metadata (you'll learn more about metadata in a later chapter).

// export const metadata: Metadata = {
//   title: 'Acme Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };


 
export const metadata: Metadata = {

//   But what if you want to add a custom title for a specific page? You can do this by adding a metadata object to the page itself. Metadata in nested pages will override the metadata in the parent. For example, in the /dashboard/invoices page, you can update the page title:

//   import { Metadata } from 'next';
 
// export const metadata: Metadata = {
//   title: 'Invoices | Acme Dashboard',
// };

// This works, but we are repeating the title of the application in every page. If something changes, like the company name, you'd have to update it on every page.

// Instead, you can use the title.template field in the metadata object to define a template for your page titles. This template can include the page title, and any other information you want to include.

// In your root layout, update the metadata object to include a template:
  title: {
    template: '%s | Acme Dashboard', //The %s in the template will be replaced with the specific page title.
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),

//Now, in your /dashboard/invoices page, you can add the page title:
//export const metadata: Metadata = {
//   title: 'Invoices',
// };

};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
      </body>
      {/* By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch. */}

      {/* Navigate to your browser, open dev tools and select the body element. You should see Inter and Inter_Fallback are now applied under styles. */}
      {/* <body>{children}</body> */}


    </html>
  );
}
