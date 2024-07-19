import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collectibles from "/pages/Collectibles.jsx";
import Creators from "../pages/Creators.jsx";
import Vault from "../pages/Vault.jsx";
import Profile from "../pages/Profile.jsx";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { Network } from "lucide-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const wallets = [new PetraWallet()];

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={true}
      optInWallets={["Petra"]}
      dappConfig={{ network: Network.DEVNET }}
      onError={(error) => console.error(error)}
    >
      <RouterProvider router={router} />
    </AptosWalletAdapterProvider>
  </React.StrictMode>
);
