import './globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import SessionProvider from '@/providers/SessionProvider';
import { options as authOptions } from '@/api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'Comandas',
  description: 'Generated by BAMBU',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
