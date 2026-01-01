import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsFillCartCheckFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import momo from "../assets/Logo.png";
import { cartContext } from "../store/CartProvider";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { logout, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { state } = useContext(cartContext);
  const [open, setOpen] = useState(false);

  const totalItem = state?.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-[10vh] bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/">
            <img src={momo} alt="logo" className="w-24" />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <NavLink to="/about" className="hover:underline">About Us</NavLink>
            <NavLink to="/menu" className="hover:underline">Our Menu</NavLink>
            <NavLink to="/services" className="hover:underline">Services</NavLink>
            <NavLink to="/advice" className="hover:underline">Allergy Advice</NavLink>

            {/* CART */}
            <NavLink to="/cartpage" className="relative">
              <BsFillCartCheckFill size={24} />
              {totalItem > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
                  {totalItem}
                </span>
              )}
            </NavLink>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* SOCIAL ICONS */}
            {[FaFacebookF, BsInstagram, FaTiktok].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 flex items-center justify-center bg-gray-400 text-white rounded-full hover:bg-orange-500">
                <Icon size={14} />
              </a>
            ))}

            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-1 bg-orange-500 text-white rounded-full"
            >
              Contact
            </button>

            {/* PROFILE */}
            <div className="relative group">
              <img
                src={
                  isAuthenticated
                    ? user?.picture
                    : "https://freesvg.org/img/abstract-user-flat-4.png"
                }
                className="w-8 h-8 rounded-full cursor-pointer"
              />

              <div className="w-36 absolute right-0 top-10 hidden group-hover:flex flex-col bg-black/70 text-white text-sm rounded p-3 space-y-2">
                <NavLink to="/profile">Profile</NavLink>
                <div>
                  {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
                  {/* {!isAuthenticated && <NavLink to="/register">Register</NavLink>} */}
                  {isAuthenticated && (
                    <button onClick={() => logout()}>Logout</button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-4 text-gray-700">
              <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/menu">Menu</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services">Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/cartpage">
                Cart ({totalItem || 0})
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/profile">Profile</NavLink>
              {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
              {isAuthenticated && (
                <button onClick={() => logout()}>Logout</button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT OFFSET */}
      <div className="pt-[70px]">
        <Outlet />
      </div>
    </>
  );
}

export default Header;
