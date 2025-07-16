import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black ${className}`}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

// to change name from onChange to on... and how to do it
// call back function NOT use call back
// proc spreading
// vscode, shadcn 
// upload to github