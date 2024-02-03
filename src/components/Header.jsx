import { NavLink } from "react-router-dom";

import Button from "./Buttons/Button";

function Header() {
  return (
    <div className="w-full">
      <div className="xl:w-[70%] mx-auto flex justify-between gap-4 sm:w-full">
        <div className="w-[10%]">
          <NavLink to="/">
            <img
              className="h-[80px] p-[10px] flex justify-center items-center"
              src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="bg-white w-[55%] sm:w-[35%] sm:gap-[20px] p-[10px] flex justify-around items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400  text-[36px]" : "text-gray-700"}
              text-[26px] font-semibold font-mono hover:text-orange-400`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400 text-[30px]" : "text-gray-700"}
              text-[24px] font-semibold font-mono hover:text-orange-400`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400 text-[30px]" : "text-gray-700"}
              text-[24px] font-semibold font-mono hover:text-orange-400`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `${isActive ? "text-orange-400 text-[30px]" : "text-gray-700"}
              text-[24px] font-semibold font-mono hover:text-orange-400`
            }
          >
            Github
          </NavLink>
        </div>

        <div className="bg-white xl:w-[35%] p-[10px] flex justify-evenly sm:w-[20%] sm:gap-[20px]">
          <Button
            text="Login"
            textColor="text-white"
            bgColor="bg-blue-500"
            borderColor="border-blue-500"
          />
          <Button
            text="Sign Up"
            textColor="text-blue-500"
            bgColor="bg-white"
            borderColor="border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
