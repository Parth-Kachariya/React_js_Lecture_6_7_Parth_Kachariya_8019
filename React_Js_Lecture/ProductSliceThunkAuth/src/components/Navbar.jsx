import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart.cart);

  const navigate = useNavigate()

  const {user , logout , isAuthenticated , loginWithPopup , loginWithRedirect} = useAuth0()

  const isAuthenticatedUser = () => {
    if(isAuthenticated){
      navigate("/cart")
    }else{
      loginWithRedirect()
    }
  }
  

  return (
    <>
      <div className="flex justify-around bg-blue-500 p-4 items-center">
        <div className="text-4xl font-black text-white">Navbar</div>
        <ul className="">
          <li className="space-x-4 flex text-white">
            <NavLink to="/">Product</NavLink>
            <button onClick={isAuthenticatedUser}>
              <div className="flex">
                <span>Cart</span>
                <span className="flex items-center justify-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium h-4 w-4 rounded-full bg-gray-900 text-white">
                  {cartItem.length}
                </span>
              </div>
            </button>
            {
              isAuthenticated  ? (
                <>
                  <img className="h-[35px] rounded-full" src={user.picture} alt="" />
                  <NavLink>{user.name}</NavLink>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <button onClick={loginWithRedirect}>Login</button>
              )
            }
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
