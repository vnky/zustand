'use client'
import { create } from 'zustand'
import { combine } from 'zustand/middleware';
import Square from './Square';
import { calculateWinner, calculateTurns, calculateStatus } from '@/util/util';

const squares = ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

// const useGameStore = create(
//   combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
//     return {
//       setSquares: (nextSquares) => {
//         set((state) => ({
//           squares:
//             typeof nextSquares === 'function'
//               ? nextSquares(state.squares)
//               : nextSquares,
//         }))
//       },
//       setXIsNext: (nextXIsNext) => {
//         set((state) => ({
//           xIsNext:
//             typeof nextXIsNext === 'function'
//               ? nextXIsNext(state.xIsNext)
//               : nextXIsNext,
//         }))
//       },
//     }
//   }),
// )


const useGameStore = create((set) => ({
  squares: Array(9).fill(null),
  xIsNext: true,
  setSquares: (nextSquares) => {
    set((state) => {
      console.log('setSquares', nextSquares, typeof nextSquares);
      return {
        squares: typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
      }
    })
  },
  setXIsNext: (nextXIsNext) => {
    set((state) => {
      console.log('setXIsNext', nextXIsNext, typeof nextXIsNext);
      return {
        xIsNext: typeof nextXIsNext === 'function' ? nextXIsNext(state.xIsNext) : nextXIsNext,
      }
    })
  },
}))

export default function Board() {
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext)
  const player = xIsNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);
  console.log('winner', winner, turns);


  const handleClick = (i) => {
    console.log('clicked', i);
    if (squares[i] || winner) return;
    //return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 dark:border-gray-700 rounded-lg min-w-[400px]">
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
      {winner && <div className="text-lg font-200 text-green-500 mb-4"> Winner of the game: {winner}</div>}
      {!winner && !turns && <div className="text-lg font-200 text-green-500 mb-4"> Game is Tie </div>}
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
          <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)}/>
        ))}
      </div>
    </div>
  )
}
  