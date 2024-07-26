import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import NFTModal from "../src/components/modal/NFTModal";

function NFT() {
  return (
    <main className="bg-[#19162f] space-y-8">
      <Navbar />
      <NFTModal />
    </main>
  );
}

export default NFT;
