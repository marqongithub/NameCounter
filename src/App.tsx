import NameCounter from "./components/NameCounter";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 gap-4 p-4">
        <ModeToggle />
        <NameCounter />
      </div>
    </ThemeProvider>
  );
}

export default App;


/*
import React, { useState, useEffect } from 'react';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-black dark:text-white">
      <h1 className="mb-4 text-3xl font-bold">Dark Mode Test</h1>
      <button
        className="px-4 py-2 rounded bg-gray-800 text-white"
        onClick={() => setDark(!dark)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
*/ 