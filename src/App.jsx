import { useState } from "react";
import Card from "./components/card/card.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import CreatorCard from "./components/creator-card/creatorCard.jsx";
import "./App.css";
import cardItems from "./constants/card.jsx";
import creatorItems from "./constants/creatorConstants.jsx";
import categories from "./constants/categoryConstants.jsx";
import CategoryCard from "./components/category-card/categoryCard.jsx";
import Carousel from "./components/carousel/carousel.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      {/* Hero carousel */}
      <section className="bg-[#100E1F] lg:p-8">
        <Carousel />
      </section>

      {/* Categories section */}
      <section className="w-full bg-[#100E1F] py-8 px-2 overflow-auto xl:overflow-hidden">
        <div className="w-fit max-w-[1260px] flex flex-nowrap gap-[10px] mx-auto">
          {categories.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                imageURL={item.imageURL}
                name={item.name}
              />
            );
          })}
        </div>
      </section>

      {/* Top collections - exclusive drops */}
      <section className="w-full bg-[#100E1F] px-2 py-4 lg:py-20 space-y-4 lg:space-y-6">
        <div className="max-w-[1260px] text-white font-readex-pro mx-auto">
          <p className="text-sm text-[#94A3B8]">Top collections</p>
          <h2 className="text-2xl font-semibold leading-7">Exclusive drops</h2>
        </div>
        <div className="w-full max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-between mx-auto">
          {creatorItems.map((item, index) => {
            return (
              <CreatorCard
                key={index}
                imageURL={item.imageURL}
                cardNo={index + 1}
                amount={item.amount}
                creatorName={item.creatorName}
              />
            );
          })}
        </div>
      </section>

      {/* NFT cards section */}
      <section className="w-full bg-[#151329] px-2 py-4 lg:py-20 space-y-4 lg:space-y-6">
        <div className="max-w-[1260px] text-white font-readex-pro mx-auto">
          <p className="text-sm text-[#94A3B8]">New & worthy</p>
          <h2 className="text-2xl font-semibold leading-7">Hot bids</h2>
        </div>
        <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center mx-auto">
          {cardItems.map((item) => {
            return (
              <Card
                key={item.id}
                imageURL={item.imageURL}
                publishedDate={item.publishedDate}
                collectors={item.collectors}
                collectionName={item.collectionName}
                creatorName={item.creatorName}
                showAvatars
              />
            );
          })}
        </div>
      </section>

      {/* Top creators section */}
      <section className="w-full bg-[#100E1F] px-2 py-4 lg:py-20 space-y-4 lg:space-y-6">
        <div className="max-w-[1260px] text-white font-readex-pro mx-auto">
          <p className="text-sm text-[#94A3B8]">Most active</p>
          <h2 className="text-2xl font-semibold leading-7">Top Creators</h2>
        </div>
        <div className="w-full max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-between mx-auto">
          {creatorItems.map((item, index) => {
            return (
              <CreatorCard
                key={index}
                imageURL={item.imageURL}
                cardNo={index + 1}
                amount={item.amount}
                creatorName={item.creatorName}
              />
            );
          })}
        </div>
      </section>

      {/* NFT cards section - explore */}
      <section className="w-full bg-[#151329] px-2 py-4 lg:py-20 space-y-4 lg:space-y-6">
        <div className="max-w-[1260px] text-white font-readex-pro mx-auto">
          <p className="text-sm text-[#94A3B8]">Top collections</p>
          <h2 className="text-2xl font-semibold leading-7">Explore</h2>
        </div>
        <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center mx-auto">
          {cardItems.map((item) => {
            return (
              <Card
                key={item.id}
                imageURL={item.imageURL}
                publishedDate={item.publishedDate}
                collectors={item.collectors}
                collectionName={item.collectionName}
                creatorName={item.creatorName}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
