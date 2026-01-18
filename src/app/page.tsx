import Counter from '@/components/Counter';
import Board from '@/components/Board';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js 16 + Zustand
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          A modern state management example using Zustand with Next.js 16
        </p>
        <div className="flex flex-col items-center gap-8">
          <Board />
          <Counter />
        </div>
      </div>
    </main>
  );
}

