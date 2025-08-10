import NameCounter from "./components/NameCounter";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 gap-4 p-4">
        <ModeToggle />
        <NameCounter />
      </div>
    </ThemeProvider>
  );
}

export default App;
