import { HTMLInputTypeAttribute } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

interface Props<TFieldValues>
  extends Omit<ControllerProps<TFieldValues>, 'render'> {
  label: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
}
export default function FormControl<T>({
  label,
  placeholder,
  type,
  ...props
}: Props<T>) {
  return (
    <Controller
      {...props}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <div className="flex | flex-col | gap-2 | relative">
          {/* Label */}
          <label
            className={`
              font-semibold 
            | text-xs 
            | md:text-sm 
            | xl:text-base
            | ${error ? 'text-red-500' : 'text-black'}
            `}
            htmlFor={props.name}
          >
            {label}
          </label>

          {/* Input */}
          <input
            autoComplete="off"
            className={`
              outline-none 
            | outline-1 
            | ${error ? 'outline-red-500' : 'outline-gray-300'} 
            | focus:outline-2
            | transition-all
            | duration-75
            | focus:outline-blue-500 
            | rounded-lg 
            | py-2 
            | px-4 
            | placeholder:text-gray-300
            | text-xs
            | md:text-sm
            | xl:text-base
            `}
            type={type}
            id={props.name}
            placeholder={placeholder}
            {...field}
            value={(value as string) ?? ''}
          />

          {/* Error */}
          {error && (
            <span
              className="
              text-red-500 
              | font-semibold 
              | text-xs 
              | text-right
              | absolute
              | top-2
              | right-0
              "
            >
              * {error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
