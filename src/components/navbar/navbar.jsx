import React, { useState } from "react";
import menuIcon from "../../assets/navbar/menuIcon.svg";
import elixirIcon from "../../assets/navbar/elixirIcon.svg";
import profilePlaceholder from "../../assets/navbar/profilePlaceholder.png";
import chevronDown from "../../assets/navbar/chevronDown.svg";
import creatowLogo from "../../assets/navbar/creatowLogo.svg";

function NavAccDropdown() {
  return (
    <div className="hidden lg:flex w-fit text-[#9A8FFF] bg-[#151334] border border-[#2B225B] rounded-lg gap-3 p-2">
      {/* Elixir count */}
      <div className="bg-[#150A32] flex justify-center items-center gap-1 rounded-md px-3">
        <p className="text-sm leading-tight font-semibold">500</p>
        <img src={elixirIcon} alt="" className="w-4 aspect-square" />
      </div>
      {/* Divider line */}
      <div className="w-[1px] min-h-[27px] h-full bg-[#9A8FFF]"></div>
      {/* profile icon and dropdown */}
      <div>
        <button className="flex justify-center items-center gap-2">
          <img
            src={profilePlaceholder}
            alt=""
            className="rounded-full w-7 aspect-square"
          />
          <p className="text-sm font-semibold tracking-[0.1px]">lofikiss</p>
          <img
            src={chevronDown}
            alt=""
            className="rounded-full w-3 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#010314] flex justify-between items-center gap-3 py-2 px-4 md:px-8">
        {/* Hamburger menu - visible only on mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <img src={menuIcon} alt="" />
        </button>

        {/* Logo and links - visible only on desktop */}
        <div className="hidden lg:flex w-1/3 text-white justify-left items-center gap-8">
          <img src={creatowLogo} alt="company-logo" />
          <a href="">Explore</a>
          <a href="">Vault</a>
        </div>

        {/* Searchbar - always visible */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Collection, item or user"
          className="lg:w-1/3 bg-[#2B225B] w-4/5 bg-search-bar-icon bg-no-repeat bg-[12px_center] rounded-[48px] py-3 px-3 pl-10 text-[#9A8FFF] font-readex-pro text-sm outline-none"
        />

        {/* Small profile icon - visible only on mobile */}
        <button className="lg:hidden rounded-full overflow-hidden">
          <img src={profilePlaceholder} alt="" />
        </button>

        {/* Elixir count and dropdown - visible only on desktop */}
        <div className="hidden lg:flex w-1/3 justify-end">
          <NavAccDropdown />
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
    </>
  );
}

export default Navbar;
