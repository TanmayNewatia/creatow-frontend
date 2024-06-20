import React from "react";
import Navbar from "../src/components/navbar/navbar";
import cardItems from "../src/constants/card";
import Card from "../src/components/card/card";
import personIcon from "../src/assets/filter/personIcon.svg";
import categoryIcon from "../src/assets/filter/categoryIcon.svg";
import sortIcon from "../src/assets/filter/sortbyIcon.svg";
import collectionsIcon from "../src/assets/filter/collectionsIcon.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select.jsx";

function Vault() {
  return (
    <main className="min-h-screen bg-[#0d0a1b]">
      <Navbar />

      {/* Top heading and buttons */}
      <section className="max-w-[1260px] px-2 py-4 flex justify-between lg:justify-between items-center gap-4 lg:gap-0 mx-auto">
        <div className="w-fit md:w-fit flex gap-4 lg:gap-8 justify-between items-center">
          <h1 className="text-white text-[22px] font-bold leading-7 font-readex-pro">
            Explore
          </h1>
        </div>
        <div className="w-full flex justify-end gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="max-w-[442px] w-full bg-[#19143e] bg-search-bar-icon bg-no-repeat bg-[12px_center] rounded-[48px] py-3 px-3 pl-10 text-[#9A8FFF] font-readex-pro text-sm outline-none"
          />
          <div className="hidden lg:flex gap-4 font-readex-pro">
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger
                icon={categoryIcon}
                className="border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2"
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                <SelectItem
                  value="All"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  All
                </SelectItem>
                <SelectItem
                  value="Art"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Art
                </SelectItem>
                <SelectItem
                  value="Audio"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Audio
                </SelectItem>
                <SelectItem
                  value="3D"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  3D
                </SelectItem>
                <SelectItem
                  value="GenAI"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  GenAI
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              defaultValue="Collections"
              onValueChange={(value) => console.log(value)}
            >
              <SelectTrigger
                icon={collectionsIcon}
                className="hidden lg:flex border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2"
              >
                <SelectValue placeholder="Collections" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                <SelectItem
                  value="Collections"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Collections
                </SelectItem>
                <SelectItem
                  value="Creators"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Creators
                </SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger
                icon={sortIcon}
                className="hidden lg:flex border-2 border-[#363355] text-[#9A8FFF] bg-[#1E1B48] rounded-[40px] gap-2"
              >
                <SelectValue placeholder="Recently added" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1B48] font-semibold text-white border-2 border-[#9a8fff] rounded-xl font-readex-pro">
                <SelectItem
                  value="RecentlyAdded"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Recently added
                </SelectItem>
                <SelectItem
                  value="RecentlyAdded"
                  className="focus:bg-[#D0AAFF33] focus:text-white py-3"
                >
                  Recently added
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Cards section */}
      <section>
        <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 place-items-center mx-auto">
          {cardItems.map((item) => {
            return (
              <Card
                key={item.id}
                imageURL={item.imageURL}
                publishedDate={item.publishedDate}
                collectors={item.collectors}
                collectionName={item.collectionName}
                creatorName={item.creatorName}
                likes={item.likes}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Vault;
