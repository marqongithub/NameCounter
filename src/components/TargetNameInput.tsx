"use client";
import { Input } from "../components/ui/input";

type TargetNameInputProps = {
  targetName: string;
  onSomething: (value: string) => void;
  className?: string; // optional className prop
};

export default function TargetNameInput({ targetName, onSomething, className }: TargetNameInputProps) {
  return (
    <div className={`mb-4 ${className ?? ""}`}>
      <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">
        Name to Match:
      </label>
      <Input
        id="target"
        placeholder="e.g. Marq"
        value={targetName}
        onChange={(e) => onSomething(e.target.value)}
      />
    </div>
  );
}
