import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collectibles from "/pages/Collectibles.jsx";
import Creators from "../pages/Creators.jsx";
import Vault from "../pages/Vault.jsx";
import Profile from "../pages/Profile.jsx";
import NFT from "../pages/NFT.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/collectibles",
    element: <Collectibles />,
  },
  {
    path: "/creators",
    element: <Creators />,
  },
  {
    path: "/vault",
    element: <Vault />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/creator/nft/:nftID",
    element: <NFT/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
