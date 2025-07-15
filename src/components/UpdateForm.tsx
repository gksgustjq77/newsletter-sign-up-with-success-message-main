import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import UpdateImage from "./UpdateImage";
import { useNavigate } from "react-router-dom";

type DiscripItem = { imgUrl: string; dec: string };
type DiscripMapType = DiscripItem[];

const discripMap: DiscripMapType = [
  {
    imgUrl: "/images/icon-success.svg",
    dec: "Product discovery and building what matters",
  },
  {
    imgUrl: "/images/icon-success.svg",
    dec: "Measuring to ensure updates are a success",
  },
  { imgUrl: "/images/icon-success.svg", dec: "And much more!" },
];

const validateEmail = (email: string) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return {
    valid: isValid,
    validMsg: isValid ? "" : "Valid email required",
  };
};

const UpdateForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState({ valid: true, validMsg: "" });

  useEffect(() => {
    if (email === "") {
      setValidation({ valid: true, validMsg: "" });
    } else {
      setValidation(validateEmail(email));
    }
  }, [email]);

  const emailSubmit = () => {
    const result = validateEmail(email);
    if (result.valid && email !== "") {
      navigate("/complete", { state: { email } });
    } else {
      setValidation(result);
    }
  };

  return (
    <div className="h-[100vh] w-full flex-col gap-10 overflow-auto md:grid md:h-auto md:flex-none md:grid-cols-[3fr_2.5fr]">
      {/* 오른쪽: 이미지 */}
      <div className="order-1 flex items-stretch md:order-2 md:h-full md:w-full">
        <UpdateImage />
      </div>

      {/* 왼쪽: 텍스트 콘텐츠 */}
      <div className="order-2 flex flex-col justify-center gap-[15px] p-[20px] text-left md:order-1 md:gap-[0px] md:px-[30px]">
        <div className="flex flex-col md:gap-[30px] md:p-[20px]">
          <h1 className="mb-4 whitespace-nowrap text-[2.5rem] font-bold leading-[1.2] text-[hsl(235,18%,26%)] md:text-[5rem]">
            Stay Updated!
          </h1>

          <div className="mb-7 space-y-1 text-black md:text-[1.2rem]">
            <p>Join 60,000+ product managers receiving monthly</p>
            <p>updates on:</p>
          </div>

          <div className="mb-8 flex flex-col gap-3">
            {discripMap.map((item, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <img
                  src={item.imgUrl}
                  alt={`desc-${item.imgUrl}`}
                  className="w-[20px]"
                />
                <span className="text-base font-semibold text-black md:text-[1.2rem]">
                  {item.dec}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <Input
              title="Email address"
              value={email}
              setValue={setEmail}
              placeholder="email@company.com"
              error={!validation.valid}
              errorMsg={validation.validMsg}
            />
          </div>

          <Button
            title="Subscribe to monthly newsletter"
            onClick={emailSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
