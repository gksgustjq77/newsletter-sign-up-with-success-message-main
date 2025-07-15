interface ButtonProps {
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <div className="">
        <button
          onClick={onClick}
          className="w-full rounded-lg bg-[hsl(234,29%,20%)] p-4 text-xl font-bold"
        >
          {title || ""}
        </button>
      </div>
    </>
  );
};

export default Button;
