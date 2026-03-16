import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithPopup, loginWithRedirect:login , isAuthenticated} = useAuth0();

  return (
    <>
      <div>Login</div>
      {
        !isAuthenticated ? (
          <button className="bg-blue-900 text-white p-2 m-2" onClick={login}>Login</button>
        ) : null
      }
    </>
  );
};

export default Login;
