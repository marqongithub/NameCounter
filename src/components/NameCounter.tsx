//"use client";
import { useState, useEffect } from "react";
import NameInput from "./NameInput";
import TargetNameInput from "./TargetNameInput";

export function NameCounter() {
  const [name, setName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (name && name.toLowerCase() === targetName.toLowerCase()) {
      setCounter((prev) => prev + 1);
    }
  }, [name, targetName]);

  return (
    <div className="max-w-lg mx-auto mt-24 px-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
        Name Match Counter
      </h1>

      <TargetNameInput targetName={targetName} onSomething={setTargetName} />
      <NameInput name={name} onChange={setName} />

      <div className="mt-6 text-gray-800 text-base">
        <span className="font-medium">Counter:</span> {counter}
      </div>
    </div>
  );
}

export default NameCounter;