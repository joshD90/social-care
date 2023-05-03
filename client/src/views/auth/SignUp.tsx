import { useCallback, useState } from "react";
import AdminInput from "../../microComponents/AdminInput";

type Props = {};

const SignUp = (props: Props) => {
  const [value, setValue] = useState("Something");

  const myChangeFunction = useCallback(() => {
    console.log("doing something");
  }, [value]);

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="w-4/5 md:w-2/3 lg:w-1/3 bg-slate-600 border-slate-50 border-2 rounded-sm p-5">
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-gray-800">
              UserName
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 round-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
