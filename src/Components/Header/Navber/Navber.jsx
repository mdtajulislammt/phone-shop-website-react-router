import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const Navber = () => {
  return (
    <div>
      <nav className="  flex items-center justify-between py-6 px-5 bg-green-400 rounded-b-xl shadow-md">
          <Logo></Logo>
        <ul className=" flex gap-10 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white px-3 py-2 rounded-lg  underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white px-3 py-2 rounded-lg  underline" : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " bg-white px-3 py-2 rounded-lg underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
