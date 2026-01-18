'use client'
import { create } from 'zustand'
import { combine } from 'zustand/middleware';
import Square from './Square';

const squares = ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

const useGameStore = create(
    combine({ squares: squares }, (set) => {
      return {
        setSquares: (nextSquares) => {
          set((state) => ({
            squares:
              typeof nextSquares === 'function'
                ? nextSquares(state.squares)
                : nextSquares,
          }))
        },
      }
    }),
  )

export default function Board() {
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 dark:border-gray-700 rounded-lg min-w-[400px]">
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 'calc(3 * 2.5rem)',
          height: 'calc(3 * 2.5rem)',
          border: '1px solid #999',
        }}
      >
        {squares.map((square, squareIndex) => (
          <Square key={squareIndex} value={square} />
        ))}
      </div>
    </div>
  )
}
  