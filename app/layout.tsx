import './globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import SessionProvider from './providers/SessionProvider';
import { options as authOptions } from './api/auth/[...nextauth]/options';
import LoginTest from './LoginTest';
import HomeTest from './HomeTest';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <ReactQueryProvider>
            {!session ? <LoginTest /> : <HomeTest />}
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
