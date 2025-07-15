import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Complete: React.FC = () => {
  const location = useLocation();
  const navi = useNavigate();
  const email = location.state?.email;

  const HomeScreen = () => {
    navi("/");
  };
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col justify-between gap-[40px] rounded-none bg-white p-[40px] text-[hsl(234,29%,20%)] md:h-auto md:w-[70%] md:gap-[4rem] md:rounded-[40px] md:p-[100px] md:p-[20px]">
        <div className="flex flex-col gap-[30px] md:gap-[40px]">
          <div className="mt-[50%] md:mt-0">
            <img src="/images/icon-success.svg"></img>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold md:text-6xl">
              Thanks for subscribing!
            </h1>
          </div>
          <div className="flex flex-col text-left text-base md:text-2xl">
            <span>A confirmation email hs been sent to</span>
            <span className="flex whitespace-nowrap">
              <p className="font-bold">{email || "ash@loremcompany.com."}</p>
              &nbsp; Plase open it and click
            </span>
            <span>the button inside to confirm your subscription.</span>
          </div>
        </div>
        <div className="text-white">
          <Button title="Dismiss message" onClick={HomeScreen}></Button>
        </div>
      </div>
    </>
  );
};
export default Complete;
