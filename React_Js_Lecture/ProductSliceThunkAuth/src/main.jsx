import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import AddProduct from "./components/AddProduct.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`} clientId={`${import.meta.env.VITE_AUTH0_CLIENT_ID}`} authorizationParams={{ redirect_uri: window.location.origin }}>
    <Provider store={store}>
      <App />
    </Provider>
    </Auth0Provider>
  </StrictMode>,
);
