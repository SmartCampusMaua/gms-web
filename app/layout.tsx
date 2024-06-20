import '@/app/ui/global.css';
import { Metadata } from 'next';

import { inter } from '@/app/ui/fonts';// importando a fonte do arquivo de fontes
// This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your <html> and <body> tags, and add metadata (you'll learn more about metadata in a later chapter).




 
export const metadata: Metadata = {

  title: {
    template: '%s | Acme Dashboard', //The %s in the template will be replaced with the specific page title.
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),


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



    </html>
  );
}
