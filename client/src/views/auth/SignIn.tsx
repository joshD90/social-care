import { useContext, useState } from "react";

import { AuthSignIn } from "../../types/authTypes";
import { AuthContext } from "../../context/AuthContext";
import getFetchUser from "../../fetchRequests.ts/getUserFetch";
import { Navigate } from "react-router-dom";

type Props = {};

const SignIn = (props: Props) => {
  const [credentials, setCredentials] = useState<AuthSignIn>({
    username: "",
    password: "",
  });
  const { currentUser, userDispatch } = useContext(AuthContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name as "password" | "username"]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const abortController = new AbortController();
    getFetchUser(credentials, userDispatch, abortController);

    return () => abortController.abort();
  };

  if (currentUser.user) return <Navigate to="/" />;

  return (
    <div
      style={{ height: "calc(100vh - 3rem)" }}
      className="w-full flex justify-center items-center"
    >
      <div className="w-4/5 md:w-2/3 lg:w-1/3 bg-slate-600 border-slate-50 border-2 rounded-sm p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-gray-800">
              UserName
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-2 rounded-sm"
              name="username"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 round-sm"
              name="password"
              required
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-green-600 p-2">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
