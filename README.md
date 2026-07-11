# LayChess

A browser-native chess app with a custom TypeScript engine. Play against the computer or a friend, tune search depth, and explore how negamax search runs entirely client-side — no server, no install.

## Features

- **Custom engine** — Negamax with alpha-beta pruning, quiescence search, iterative deepening, transposition tables, Zobrist hashing, killer moves, and MVV-LVA ordering
- **Play modes** — Computer opponent or local two-player on the same board
- **Board controls** — Adjustable search depth, move hints, undo, and new game
- **Polish** — Five board themes, optional 3D tilt, move sounds, and dark/light mode
- **About page** — Architecture overview, engine techniques, performance notes, and roadmap

## Tech stack

| Layer | Tools |
|-------|-------|
| UI | React 19, TypeScript, Tailwind CSS 4, Radix UI |
| Build | Vite 7 |
| Chess rules | [chess.js](https://github.com/jhlywa/chess.js) |
| Board | [react-chessboard](https://github.com/Clariity/react-chessboard) |
| Engine | Hand-written search and evaluation in TypeScript |

## Getting started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── components/
│   ├── ChessGame.tsx      # Main game board and controls
│   ├── about/             # About page sections
│   ├── layout/            # Header and page shell
│   └── ui/                # Shared UI primitives
├── lib/
│   └── chess-ai/          # Engine: search, evaluation, hashing, sounds
├── routes/
│   ├── index.tsx          # Home — play + chess facts
│   └── about.tsx          # About page
└── hooks/
    └── use-theme.ts       # Theme persistence
```

## Engine overview

The engine evaluates positions with material, piece-square tables, mobility, and king safety hints. Search uses iterative deepening so each pass improves move ordering for the next. A Zobrist-keyed transposition table caches subtrees to avoid redundant work.

Depth is configurable in the UI (default 3). Higher depths search further but take longer — the sweet spot depends on your machine.

## Deployment

The app is a static SPA. `vercel.json` includes a catch-all rewrite for client-side routing. Deploy to Vercel, Netlify, or any static host after `npm run build`.

Optional environment variables:

| Variable | Purpose |
|----------|---------|
| `VITE_GITHUB_URL` | GitHub link on the About page |
| `VITE_PORTFOLIO_URL` | Portfolio link on the About page |

## Roadmap

- Multiplayer over the network
- Opening explorer and analysis board
- ELO ratings and tournament mode
- Mobile-optimized touch controls

## Author

**Prakhar Kumar** — Full Stack & Chess Engine Developer

## License

Private project. All rights reserved.
