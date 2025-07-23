"use client";
import { Input } from "../components/ui/input";

type NameInputProps = {
  name: string;
  onChange: (value: string) => void;
  className?: string; // allow optional className prop
};

export default function NameInput({ name, onChange, className }: NameInputProps) {
  return (
    <div className={`mb-4 ${className ?? ""}`}>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Your Name:
      </label>
      <Input
        id="name"
        placeholder="e.g. Marq"
        value={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
