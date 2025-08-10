"use client";
import { useEffect, useState } from "react";
import NameInput from "./NameInput";
import TargetNameInput from "./TargetNameInput";
import { Button } from "@/components/ui/button";

export default function NameCounter() {
  const [name, setName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (name && name.toLowerCase() === targetName.toLowerCase()) {
      setCounter((prev) => prev + 1);
    }
  }, [name, targetName]);

  const handleReset = () => setCounter(0);

  return (
    <>
      {/* Main Card */}
      <div className="max-w-md mx-auto mt-24 p-10 bg-yellow-100 dark:bg-gray-800 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] border-4 border-pink-400">
        <h1 className="text-4xl font-extrabold text-center text-pink-600 dark:text-yellow-300 mb-10">
          🧸 Name Match Game!
        </h1>

        <TargetNameInput
          targetName={targetName}
          onSomething={setTargetName}
          className="mb-6"
        />
        <NameInput name={name} onChange={setName} className="mb-6" />

        <div className="text-center mb-8">
          <span className="block text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            🎉 Matches Found
          </span>
          <span className="text-8xl font-extrabold text-pink-500 dark:text-yellow-400 drop-shadow-lg">
            {counter}
          </span>
        </div>

        <Button
          onClick={handleReset}
          className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full text-lg transition duration-200"
        >
          🔄 Reset Button!
        </Button>
      </div>
    </>
  );
}
