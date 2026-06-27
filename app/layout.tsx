import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Secure Messenger',
  description: 'Secure messaging prototype',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="zh-CN" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="flex justify-center bg-bg-deep min-h-screen">
        <div className="w-full max-w-[430px] bg-bg min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
