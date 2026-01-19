
import { create } from 'zustand'
import { combine } from 'zustand/middleware';

const squares = ['O', null, 'X', 'X', 'X', 'O', 'O', null, null];

const useGameStore = create((set) => ({
    squares: Array(9).fill(null),
    history: [Array(9).fill(null)],
    xIsNext: true,
    currentMove: 0,
    setSquares: (nextSquares) => {
      set((state) => {
        console.log('setSquares', nextSquares, typeof nextSquares);
        return {
          squares: typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
        }
      })
    },
    setHistory: (nextHistory) => {
        set((state) => {
            return {
                history: nextHistory === 'function'
                ? nextHistory(state.history)
                : nextHistory,
            }
        })
    },
    setCurrentMove: (nextCurrentMove) => {
        set((state) => {
            return  { 
            currentMove: typeof nextCurrentMove === 'function'
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
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

export default useGameStore;

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