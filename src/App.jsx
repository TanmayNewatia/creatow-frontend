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
import filterIcon from "./assets/filter/filterIcon.svg"
import collectionsIcon from "./assets/filter/collectionsIcon.svg"
import sortIcon from "./assets/filter/sortbyIcon.svg"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select.jsx";

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
        <div className="max-w-[1260px] flex justify-between text-white font-readex-pro mx-auto">
          <div>
            <p className="text-sm text-[#94A3B8]">Top collections</p>
            <h2 className="text-2xl font-semibold leading-7">
              Exclusive drops
            </h2>
          </div>
          <a href="" className="text-sm text-[#A87EFF] my-auto">
            See all
          </a>
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
        <div className="max-w-[1260px] flex justify-between text-white font-readex-pro mx-auto">
          <div>
            <p className="text-sm text-[#94A3B8]">New & worthy</p>
            <h2 className="text-2xl font-semibold leading-7">Hot bids</h2>
          </div>
          <a href="" className="text-sm text-[#A87EFF] my-auto">
            See all
          </a>
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
        <div className="max-w-[1260px] flex justify-between text-white font-readex-pro mx-auto">
          <div>
            <p className="text-sm text-[#94A3B8]">Most active</p>
            <h2 className="text-2xl font-semibold leading-7">Top Creators</h2>
          </div>
          <a href="" className="text-sm text-[#A87EFF] my-auto">
            See all
          </a>
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
        <div className="max-w-[1260px] flex justify-between text-white font-readex-pro mx-auto">
          <div>
            <p className="text-sm text-[#94A3B8]">Top collections</p>
            <h2 className="text-2xl font-semibold leading-7">Explore</h2>
          </div>
          {/* Filters */}
          <div className="my-auto">
            <div className="flex gap-4">
              <Select onValueChange={(value) => console.log(value)}>
                <SelectTrigger icon={filterIcon} className="border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                  <SelectItem value="All" className="focus:bg-[#D0AAFF33] focus:text-white py-3">All</SelectItem>
                  <SelectItem value="Art" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Art</SelectItem>
                  <SelectItem value="Audio" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Audio</SelectItem>
                  <SelectItem value="3D" className="focus:bg-[#D0AAFF33] focus:text-white py-3">3D</SelectItem>
                  <SelectItem value="GenAI" className="focus:bg-[#D0AAFF33] focus:text-white py-3">GenAI</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="Collections" onValueChange={(value) => console.log(value)}>
                <SelectTrigger icon={collectionsIcon} className="hidden lg:flex border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2">
                  <SelectValue placeholder="Collections" />
                </SelectTrigger>
                <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                  <SelectItem value="Collections" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Collections</SelectItem>
                  <SelectItem value="Creators" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Creators</SelectItem>
                </SelectContent>
              </Select>
              <Select  onValueChange={(value) => console.log(value)}>
                <SelectTrigger icon={sortIcon} className="hidden lg:flex border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2">
                  <SelectValue placeholder="Recently added" />
                </SelectTrigger>
                <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                  <SelectItem value="RecentlyAdded" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Recently added</SelectItem>
                  <SelectItem value="LastUpdated" className="focus:bg-[#D0AAFF33] focus:text-white py-3">Last Updated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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
