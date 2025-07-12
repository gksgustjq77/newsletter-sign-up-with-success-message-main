interface InputProps {
  title: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ title, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-[hsl(234,29%,20%)]">
          {title || ""}
        </span>
        <input
          placeholder={placeholder}
          type="text"
          className="rounded-[8px] border border-[hsl(0,0%,58%)] bg-white p-4 outline-none"
        ></input>
      </div>
    </>
  );
};
export default Input;
