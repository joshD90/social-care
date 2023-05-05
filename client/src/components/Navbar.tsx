import { useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import fetchSignout from "../fetchRequests.ts/fetchSignout";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUser, FaUserAlt } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const { currentUser, userDispatch } = useContext(AuthContext);

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
        {currentUser.user && (
          <div className="flex items-center gap-2 h-full">
            <FaUserAlt />
            <button
              className=" text-white h-full px-2"
              onClick={() => fetchSignout(userDispatch)}
            >
              <AiOutlineLogout size={25} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
