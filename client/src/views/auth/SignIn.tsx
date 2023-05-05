import { useContext, useState } from "react";

import { AuthSignIn } from "../../types/authTypes";
import { AuthContext } from "../../context/AuthContext";
import getFetchUser from "../../fetchRequests.ts/getUserFetch";
import { Navigate, useNavigate } from "react-router-dom";
import getFetch from "../../fetchRequests.ts/getFetch";

type Props = {};

const SignIn = (props: Props) => {
  const [credentials, setCredentials] = useState<AuthSignIn>({
    username: "",
    password: "",
  });
  const { currentUser, userDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name as "password" | "username"]: value,
    }));
  };
  //regular sign in
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const abortController = new AbortController();
    getFetchUser(credentials, userDispatch, abortController);
    return () => abortController.abort();
  };
  //guest sign in - don't have to worry about these credentials they are publicly accessible
  const handleGuestSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const abortController = new AbortController();
    getFetchUser(
      { username: "guest", password: "guest123" },
      userDispatch,
      abortController
    );
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
        <div className="flex flex-col items-center text-slate-50 gap-2 mt-8">
          <p className="text-slate-400">Don't have an account?</p>
          <button
            onClick={() => navigate("/auth/signup")}
            className="bg-gray-700 w-full py-2 bg-opacity-80 hover:bg-opacity-100"
          >
            Sign Up
          </button>
          <button
            className="py-2 w-full bg-green-700 bg-opacity-80 hover:bg-opacity-100"
            onClick={handleGuestSignIn}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
