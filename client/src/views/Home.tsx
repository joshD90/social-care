import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  //if we don't have a current user as part of our AuthContext then return us to the homepage
  if (!currentUser.user) {
    return <Navigate to="/auth/signin" replace />;
  }

  return (
    <div
      className="w-full h-full flex flex-col gap-5 items-center justify-center relative text-center"
      style={{
        height: "calc(100vh - 3rem)",
        background:
          "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.60)),url(https://www.courses.ie/wp-content/uploads/2018/02/shutterstock_135908474.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-white text-6xl">Social Care</h1>
      <h2 className="text-white text-3xl pb-10">
        A One Stop Shop for Homeless Services
      </h2>
      <button
        onClick={() => navigate("/services/categories")}
        className="p-5 bg-slate-500 bg-opacity-100"
      >
        Services
      </button>
    </div>
  );
};

export default Home;
