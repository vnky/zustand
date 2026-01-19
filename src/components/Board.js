'use client'

import Square from './Square';
import { calculateWinner, calculateTurns, calculateStatus } from '@/util/util';
import useGameStore from '@/stores/useGameStore';


export default function Board({ xIsNext, squares, onPlay }) {

  // console.log(squares, xIsNext, onPlay);

  const player = xIsNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);
  // console.log('winner', winner, turns);


  const handleClick = (i) => {
    console.log('clicked', i);
    if (squares[i] || winner) return;
    //return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <div className={`flex flex-col items-center gap-4 p-6 border rounded-lg min-w-[400px] ${winner ? 'border-green-500' : 'border-gray-300 dark:border-gray-700'}`}>
      <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
      {winner && <div className="text-lg font-200 text-green-500 mb-4"> Winner of the game: {winner} - Turns : {turns}</div>}
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
  