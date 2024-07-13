import React, { useState } from "react";
import menuIcon from "../../assets/navbar/menuIcon.svg";
import elixirIcon from "../../assets/navbar/elixirIcon.svg";
import profilePlaceholder from "../../assets/navbar/profilePlaceholder.png";
import chevronDown from "../../assets/navbar/chevronDown.svg";
import chevronUp from "../../assets/navbar/chevronUp.svg";
import creatowLogo from "../../assets/navbar/creatowLogo.svg";
import submenuIcon from "../../assets/navbar/Union.svg";

function Signup() {
  const [walletAddress, setWalletAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (window.aptos) {
      try {
        setIsLoading(true);
        const response = await window.aptos.connect();
        setWalletAddress(response.address);
        setIsLoading(false);
        console.log("Wallet connected:", response.address);
        console.log("Public Key: ", publicKey);
      } catch (error) {
        setError("Failed to connect wallet");
        console.error("Wallet connection error:", error);
      }
    } else {
      setError("Aptos wallet not found");
      console.error("Aptos wallet not found in window object");
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="text-white text-sm border border-white p-2 rounded-md"
    >
      {isLoading ? "Loading..." : "Connect wallet"}
    </button>
  );
}

function NavAccDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative lg:flex flex-col w-fit text-[#9A8FFF] bg-[#151334] border border-[#2B225B] rounded-lg gap-3 p-2">
      <div className="w-fit flex justify-center items-center gap-3 rounded-md">
        {/* Elixir count */}
        <div className="hidden lg:flex bg-[#150A32] h-full justify-center items-center gap-1 rounded-md px-3">
          <p className="text-sm leading-tight font-semibold">500</p>
          <img src={elixirIcon} alt="" className="w-4 aspect-square" />
        </div>
        {/* Divider line */}
        <div className="hidden lg:block w-[1px] min-h-[27px] h-full bg-[#9A8FFF]"></div>
        {/* profile icon and dropdown */}
        <div>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex justify-center items-center gap-2"
          >
            <img
              src={profilePlaceholder}
              alt=""
              className="rounded-full w-7 aspect-square"
            />
            <p className="hidden lg:flex text-sm font-semibold tracking-[0.1px]">lofikiss</p>
            <img
              src={showDropdown ? chevronUp : chevronDown}
              alt=""
              className="hidden lg:flex rounded-full w-3 aspect-square"
            />
          </button>
        </div>
      </div>

      {/* open dropdown menu */}
      {showDropdown && (
        <div className=" w-full h-fit">
          <a className="flex gap-3 p-3 text-sm hover:bg-[#1d193c] rounded-xl cursor-pointer">
            <img src={submenuIcon} alt="" />
            <p>Vault</p>
          </a>
          <a className="flex gap-3 p-3 text-sm hover:bg-[#1d193c] rounded-xl cursor-pointer">
            <img src={submenuIcon} alt="" />
            <p>Vault</p>
          </a>
          <a className="flex gap-3 p-3 text-sm hover:bg-[#1d193c] rounded-xl cursor-pointer">
            <img src={submenuIcon} alt="" />
            <p>Vault</p>
          </a>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#010314] flex justify-between items-center lg:items-start gap-3 py-2 px-4 md:px-8 lg:h-16">
        {/* Hamburger menu - visible only on mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <img src={menuIcon} alt="" />
        </button>

        {/* Logo and links - visible only on desktop */}
        <div className="hidden lg:flex w-1/3 text-white justify-left items-center gap-8">
          <a href="/">
            <img src={creatowLogo} alt="company-logo" />
          </a>
          <a href="">Explore</a>
          <a href="/vault">Vault</a>
        </div>

        {/* Searchbar - always visible */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Collection, item or user"
          className="lg:w-1/3 w-4/5 max-w-[442px] bg-[#2B225B] bg-search-bar-icon bg-no-repeat bg-[12px_center] rounded-[48px] py-3 px-3 pl-10 text-[#9A8FFF] font-readex-pro text-sm outline-none"
        />

        {/* Small profile icon - visible only on mobile
        <button className="lg:hidden rounded-full overflow-hidden">
          <img src={profilePlaceholder} alt="" />
        </button> */}

        {/* Elixir count and dropdown - visible only on desktop */}
        <div className="flex lg:w-1/3 justify-end">
          {showProfile ? <NavAccDropdown /> : <Signup />}
        </div>
      </nav>
      {/* Hamburger menu content */}
      {isOpen && (
        <div className="text-white bg-[#010314] flex basis-full flex-col justify-center items-center p-3">
          <a href="">Some Link</a>
          <a href="">Some Link</a>
          <a href="">Some Link</a>
          <a href="">Some Link</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
