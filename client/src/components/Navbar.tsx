import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-12 bg-slate-900 text-slate-50 flex items-center justify-between px-10">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        Logo
      </div>
      <div>
        <div>
          <form>
            <label htmlFor="searchBar" className="mr-3">
              Search
            </label>
            <input
              type="text"
              className="w-36 bg-slate-4    00 border-2 border-slate-50 rounded-full focus:bg-slate-50"
              id="searchBar"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
