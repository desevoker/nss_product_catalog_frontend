import type { Metadata } from 'next';
import layout from './layout.module.scss';
import { Montserrat } from 'next/font/google';
import './variables.scss';
import './globals.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { FavouritesContextProvider } from '@/components/FavouritesContextProvider/FavouritesContextProvider';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mont.className}>
        <FavouritesContextProvider>
          <Header />
          <main className={layout.main}>{children}</main>
        </FavouritesContextProvider>
        <Footer />
      </body>
    </html>
  );
}
