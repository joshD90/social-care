import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
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
