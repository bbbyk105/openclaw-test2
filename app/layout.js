import './globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'Minimal personal todo app with persistence using Next.js, Tailwind CSS, Prisma, and SQLite.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
