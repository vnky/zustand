'use client';

import { useStore } from '@/stores/useStore';

export default function Counter() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 dark:border-gray-700 rounded-lg min-w-[400px]">
      <h2 className="text-2xl font-bold">Counter Example</h2>
      <p className="text-4xl font-mono">{count}</p>
      <div className="flex gap-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

