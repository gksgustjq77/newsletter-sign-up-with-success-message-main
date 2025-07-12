interface ButtonProps {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <>
      <div className="">
        <button className="w-full rounded-lg bg-[hsl(234,29%,20%)] p-4">
          {title || ""}
        </button>
      </div>
    </>
  );
};

export default Button;
