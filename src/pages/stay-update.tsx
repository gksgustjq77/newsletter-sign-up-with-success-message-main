import { useNavigate } from "react-router-dom";

const StayUpdate: React.FC = () => {
  const navigate = useNavigate();

  // navigate('/path')
  return (
    <>
      <div className="flex sm:flex-col items-stretch justify-center sm:rounded-none bg-white md:rounded-[20px] overflow-hidden shadow-md"></div>
    </>
  );
};

export default StayUpdate;
