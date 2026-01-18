# Zustand + Next.js 16

A modern web application built with Next.js 16, React, and Zustand for state management. This project demonstrates various patterns and use cases of Zustand state management in a Next.js application.



## Features

- ⚡ Next.js 16 with App Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🐻 Zustand for state management
- ⚛️ React 19
- 🚀 Turbopack (default bundler)
- 🎯 Slice pattern for modular state management

## Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

### `/` - Home Page
The main landing page that displays both the Tic Tac Toe board and Counter components together. This page showcases multiple Zustand stores working simultaneously.

**Components:**
- `Board` - Interactive Tic Tac Toe game board
- `Counter` - Simple counter with increment, decrement, and reset functionality

### `/counter` - Counter Page
A dedicated page featuring the counter component with state management using Zustand slices.

**Features:**
- Increment button to increase count
- Decrement button to decrease count
- Reset button to reset count to zero
- State managed via `useStore` hook with `CounterSlice`

### `/ticTacToe` - Tic Tac Toe Game Page
A dedicated page for the Tic Tac Toe game implementation.

**Features:**
- 3x3 game board with interactive squares
- Game state management using Zustand
- Individual square components with click handling
- State managed via `useGameStore` hook

## Project Structure

```
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout with shared UI
│   │   ├── page.tsx             # Home page (/) - displays both components
│   │   ├── counter/
│   │   │   └── page.tsx         # Counter page (/counter)
│   │   ├── ticTacToe/
│   │   │   └── page.tsx         # Tic Tac Toe page (/ticTacToe)
│   │   └── globals.css          # Global styles with Tailwind
│   ├── components/              # React components
│   │   ├── Counter.tsx          # Counter component using useStore
│   │   ├── Board.js             # Tic Tac Toe board component
│   │   └── Square.js            # Individual square component for the board
│   └── stores/                  # Zustand stores
│       ├── useStore.ts          # Main store combining all slices
│       ├── counterStore.ts      # Counter slice (count, increment, decrement, reset)
│       └── authSlice.ts         # Auth slice (isAuthenticated, login, logout)
├── next.config.ts               # Next.js configuration with React Compiler
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Zustand Store Architecture

### Main Store (`useStore.ts`)
The main store combines multiple slices using Zustand's slice pattern. This allows for modular and scalable state management.

**Slices:**
- `CounterSlice` - Counter functionality
- `AuthSlice` - Authentication state (available for future use)

### Counter Store (`counterStore.ts`)
Manages counter state and actions using the slice pattern.

**State:**
- `count: number` - Current count value

**Actions:**
- `increment()` - Increments the count by 1
- `decrement()` - Decrements the count by 1
- `reset()` - Resets the count to 0

### Auth Store (`authSlice.ts`)
Manages authentication state (prepared for future authentication features).

**State:**
- `isAuthenticated: boolean` - Authentication status

**Actions:**
- `login()` - Sets authentication to true
- `logout()` - Sets authentication to false

### Game Store (`Board.js`)
Manages Tic Tac Toe game state using Zustand's `combine` middleware.

**State:**
- `squares: Array<string | null>` - Array representing the game board (3x3 grid)

**Actions:**
- `setSquares()` - Updates the squares array (accepts function or direct value)

## Components

### Counter Component
A reusable counter component that demonstrates basic Zustand usage with the slice pattern. Features a centered layout with bordered container, minimum width of 400px, and responsive button styling.

### Board Component
A Tic Tac Toe game board component that displays a 3x3 grid of squares. Uses Zustand for game state management and features a centered layout with bordered container matching the Counter component's styling.

### Square Component
Individual square component for the Tic Tac Toe board. Displays the value (X, O, or empty) and handles click events.

## Styling

The project uses Tailwind CSS for styling with:
- Responsive design patterns
- Dark mode support (via `dark:` variants)
- Consistent border and spacing utilities
- Flexbox layouts for centering and alignment
- Minimum width constraints for component consistency

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)


