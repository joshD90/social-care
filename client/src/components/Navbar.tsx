import { useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-12 bg-slate-900 text-slate-50 flex items-center justify-between px-2 md:px-10">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <AiFillHome size={30} />
      </div>
      <div className="flex gap-2 md:gap-5 items-center justify-end h-full">
        <div>
          <form className="flex items-center gap-1">
            <label htmlFor="searchBar" className="">
              <AiOutlineSearch size={20} />
            </label>
            <input
              type="text"
              className="w-36 bg-slate-200 border-2 border-slate-50 rounded-full focus:bg-slate-50 text-gray-800 px-2"
              id="searchBar"
            />
          </form>
        </div>
        <div className="flex md:gap-2 h-full">
          <Link to="/auth/signin" className="h-full">
            <button className="rounded-sm bg-lime-600 px-1 md:px-5 text-white font-bold opacity-90 hover:opacity-100 h-full">
              Sign In
            </button>
          </Link>
          <Link to="/auth/signup" className="h-full">
            <button className="rounded-sm bg-blue-600  px-1 md:px-5 text-white font-bold opacity-90 hover:opacity-100 h-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
