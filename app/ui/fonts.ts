import { Inter, Lusitana } from 'next/font/google'; //https://fonts.google.com/
// https://fonts.google.com/specimen/Lusitana?query=Lusitana
export const inter = Inter({ subsets: ['latin'] });

// subsets - define os caracteres da fonte

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });