import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`
          inline-block 
        | bg-blue-500 
        | hover:bg-blue-300 
        | transition-colors 
        | duration-300 
        | px-4 
        | py-2 
        | rounded-3xl 
        | text-white 
        | font-semibold
        | text-xs
        | md:text-sm
        | xl:text-base
        | ${className}
    `}
      {...props}
    >
      {children}
    </button>
  );
}
