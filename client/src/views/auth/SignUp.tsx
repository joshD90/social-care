import { useCallback, useState } from "react";
import { AuthCreate } from "../../types/authTypes";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const SignUp = (props: Props) => {
  const [credentials, setCredentials] = useState<AuthCreate>({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name as "username" | "password" | "passwordConfirm"]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "http://localhost:5000/auth/signup";
    try {
      const response = await fetch(url, {
        body: JSON.stringify({ ...credentials }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      if (!response.ok)
        return setError(
          `Could not Create User with the Error ${response.status}`
        );
      navigate("/auth/signin");
    } catch (error) {
      if (error instanceof Error)
        setError(`There was an error: ${error.message}`);
    }
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="w-4/5 md:w-2/3 lg:w-1/3 bg-slate-600 border-slate-50 border-2 rounded-sm p-5">
        {error !== "" && <span>{error}</span>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-gray-800">
              UserName
            </label>
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-2 rounded-sm"
              required
              name="username"
              onChange={handleInputChange}
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
              required
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-800">
              Re-enter Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 round-sm"
              name="passwordConfirm"
              required
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-green-600 p-2">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
