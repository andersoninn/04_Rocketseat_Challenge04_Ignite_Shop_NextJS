import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'GitHub Blog',
   description: 'Blog based on the github API',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={nunito.className}>
            <Header />
            {children}
            
         </body>
      </html>
   );
}
