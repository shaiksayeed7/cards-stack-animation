# Glassy Card Stack

A modern, glassmorphism-styled interactive card stack built with React and react-spring. Swipe through tickets, passes, or any card-based content with smooth physics-based animations.

![Glassy Card Stack](src/constants/assets/cards-stack-animation.gif)

## Features

- **Glassmorphism UI** — Frosted glass effect with backdrop blur
- **Physics-based animations** — Natural spring transitions via react-spring
- **Interactive stack** — Click any card to bring it to the front
- **Responsive design** — Works across devices
- **TypeScript** — Full type safety

## Tech Stack

- React 17
- TypeScript
- react-spring (animation)
- Create React App

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shaiksayeed7/cards-stack-animation.git
cd cards-stack-animation

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Card/          # Glass card component
│   └── Copyright/     # Footer credits
├── constants/
│   └── common.ts      # Card data
├── App.tsx            # Main app & animation logic
└── index.css          # Global styles
```

## Customization

Edit `src/constants/common.ts` to change card content (routes, dates, meta fields).

## Resources

- [react-spring documentation](https://react-spring.io/)
- [Spring visualizer](https://react-spring-visualizer.com/)

## Author

**Shaik Sayeed** — [GitHub](https://github.com/shaiksayeed7)

## License

See [LICENSE](LICENSE) for details.
