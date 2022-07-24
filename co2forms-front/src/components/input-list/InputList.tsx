import { useState } from "react";
import { Button } from "../shared/button";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  arrayValues: string[];
  addValue: (v: string) => void;
  remove: (v: string) => void;
}

export default function InputList({
  label,
  placeholder,
  id,
  arrayValues,
  remove,
  addValue,
}: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="flex | flex-col | gap-2 | relative">
      {/* Label */}
      <label
        className={`
      font-semibold 
    | text-xs 
    | md:text-sm 
    | xl:text-base
    `}
        htmlFor={id}
      >
        {label}
      </label>

      {/* Input */}
      <div className="flex | gap-2">
        <input
          autoComplete="off"
          className="
            flex-1
            outline-none 
            | outline-1 
            | outline-gray-300
            | focus:outline-2
            | transition-all
            | duration-75
            | focus:outline-blue-500 
            | rounded-l-lg 
            | px-4 
            | py-2
            | placeholder:text-gray-300
            | text-xs
            | md:text-sm
            | xl:text-base
            "
          type="text"
          id={id}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        {value.trim() && !arrayValues.includes(value.trim()) && (
          <Button
            className="rounded | !h-full | outlin-2 | outline-blue-500 | hover:bg-blue-500 | outline | rounded-r-lg"
            onClick={() => {
              addValue(value);
              setValue("");
            }}
          >
            +
          </Button>
        )}
      </div>

      {arrayValues.length > 0 && (
        <div className="grid | grid-cols-5 | p-4 | border | border-gray-300 | gap-2 | rounded-lg">
          {arrayValues.map((v) => (
            <Button
              onClick={() => remove(v)}
              key={v}
              className="capitalize | p-2 | !text-xs | !font-bold | !bg-green-500 | hover:!bg-green-300"
            >
              {v} X
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
