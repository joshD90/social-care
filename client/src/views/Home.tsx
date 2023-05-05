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
    <div className="w-full h-full flex items-center justify-center bg-green-300">
      <button
        onClick={() => navigate("/services/categories")}
        className="p-5 bg-slate-500"
      >
        Services
      </button>
    </div>
  );
};

export default Home;
