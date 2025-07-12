import { useNavigate } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

const StayUpdate: React.FC = () => {
  const navigate = useNavigate();

  // navigate('/path')
  return (
    <>
      <div className="flex items-stretch justify-center overflow-hidden bg-white p-0 shadow-md sm:flex-col sm:rounded-none sm:p-6 lg:rounded-[20px]">
        <UpdateForm></UpdateForm>
      </div>
    </>
  );
};

export default StayUpdate;
