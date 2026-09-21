# Dev Insights Mini Blog

This project is a small React + TypeScript blog built with Vite for the formative assessment on React fundamentals. It includes a header, a post list, reusable post cards, theme switching, and a simple higher-order component for logging.

## Overview

The application simulates an internal blogging platform for a startup called Dev Insights. Employees can view quick developer updates and tips in a simple, readable layout.

## Project Setup

This project was created using Vite with the React + TypeScript template.

```bash
npm create vite@latest mini-blog -- --template react-ts
cd mini-blog
npm install
```

## Run the App

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually http://localhost:5173.

## Build and Validate

```bash
npm run build
```

This project also includes a lint script:

```bash
npm run lint
```

## Project Structure

```text
mini-blog/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── Header/
│   │   ├── Post/
│   │   └── PostList/
│   ├── hoc/
│   │   └── withLogger.tsx
│   └── types/
│       └── post.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── index.html
```

## Component Design Choices

I used functional components for the main UI because they are simpler, easier to read, and fit the requirements of this project very well.

- `Header` is a functional component that renders the app title and nav link.
- `PostList` is a functional component that maps through a typed array of posts.
- `Post` is a functional component because it receives props and renders a single post cleanly.
- `App` is the root functional component, making the component tree easy to follow.

This choice matches the React approach used in modern front-end work, especially when using TypeScript and Vite.

## Styling Methods Used

This app uses at least two styling methods as required:

1. External CSS files for structure and styling of the `Header` and `Post` components.
2. Global CSS in `src/index.css` for shared layout, spacing, and theme variables.

A conditional visual effect is also included:

- Posts published within the last 24 hours show a "New" badge.
- The theme switch changes the page theme between light and dark modes.

## Optimization and HOC

To improve performance and align with the project requirements, I included:

- `React.memo` around the `Post` component to prevent unnecessary re-renders.
- A unique `key` prop on each rendered post in the list.
- A simple `withLogger` HOC that logs mount and unmount actions in the console.

## External Libraries / Packages Used

- React
- React DOM
- TypeScript
- Vite
- Oxlint

## Challenges and Reflection

One of the main challenges was keeping the project simple but still meeting all the requirements for styling, optimization, and documentation. I solved this by breaking the app into a few small reusable components and keeping the logic easy to follow.

I also had to make sure the project remained consistent with Vite + TypeScript best practices while adding enough polish to satisfy the formative rubric. This helped me better understand how structure, reusable components, and styling choices work together in a real React project.

## Learning Reflection

This project helped me understand how React components work together in a realistic workflow. I learned how important typing, list rendering, and small optimization choices are when building maintainable UI. It also showed me how useful documentation is for communicating project decisions clearly.

I would like to explore more advanced component patterns and state management next, especially when building larger applications with more complex user interactions.
