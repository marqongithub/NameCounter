"use client";
import { useEffect, useState } from "react";
import NameInput from "./NameInput";
import TargetNameInput from "./TargetNameInput";

export default function NameCounter() {
  const [name, setName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [counter, setCounter] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (name && name.toLowerCase() === targetName.toLowerCase()) {
      setCounter((prev) => prev + 1);
    }
  }, [name, targetName]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleReset = () => setCounter(0);

  return (
    <>
      <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Name Match Counter
        </h1>

        <TargetNameInput
          targetName={targetName}
          onSomething={setTargetName}
          className="mb-6"
        />
        <NameInput name={name} onChange={setName} className="mb-6" />

        <div className="text-center mb-8">
          <span className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Matches Found
          </span>
          <span className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {counter}
          </span>
        </div>

        <button
          onClick={handleReset}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Reset Counter
        </button>
      </div>
    </>
  );
}
