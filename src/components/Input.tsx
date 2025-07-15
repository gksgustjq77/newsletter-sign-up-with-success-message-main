import type { SetStateAction } from "react";

interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  error?: boolean;
  errorMsg?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  value,
  setValue,
  error = false,
  errorMsg = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-xs font-bold text-[hsl(234,29%,20%)]">
          {title}
        </span>
        {error && (
          <span className="text-xs font-bold text-red-500">{errorMsg}</span>
        )}
      </div>
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`rounded-[8px] border p-4 outline-none ${
          error
            ? "border-red-500 bg-red-100 text-red-500 placeholder-red-500"
            : "border-[hsl(0,0%,58%)] bg-white text-black"
        }`}
      />
    </div>
  );
};

export default Input;
