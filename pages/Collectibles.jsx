import Navbar from "/src/components/navbar/navbar";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../src/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select.jsx";
import filterIcon from "../src/assets/filter/filterIcon.svg";
import collectionsIcon from "../src/assets/filter/collectionsIcon.svg";
import personIcon from "../src/assets/filter/personIcon.svg";
import categoryIcon from "../src/assets/filter/categoryIcon.svg";
import sortIcon from "../src/assets/filter/sortbyIcon.svg";
import cardItems from "../src/constants/card";
import Card from "../src/components/card/card";

function Collectibles() {
  return (
    <main className="min-h-screen bg-[#080114]">
      <Navbar />

      {/* Top heading and buttons */}
      <section className="max-w-[1260px] px-2 py-4 flex justify-between lg:justify-between items-center mx-auto">
        <div className="flex gap-8 items-center">
          <h1 className="text-white text-[22px] font-bold leading-7 font-readex-pro">
            Explore
          </h1>
          <div className="space-x-2">
            <button className="bg-[#1a0c38] text-white text-opacity-40 text-sm font-medium px-3 py-2 rounded-[40px] border-2 border-[#363355]">
              <div className="flex gap-2 items-center">
                <p>Creators</p>
                <img src={personIcon} alt="" />
              </div>
            </button>
            <button className="bg-[#1a0c38] text-white text-opacity-40 text-sm font-medium px-3 py-2 rounded-[40px] border-2 border-[#363355]">
              <div className="flex gap-2 items-center">
                <p>Collectibles</p>
                <img src={collectionsIcon} alt="" />
              </div>
            </button>
          </div>
        </div>
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
      </section>

      {/* Card tabs */}
      <section className="max-w-[1260px] bg-[#080114] px-2 py-4 mx-auto">
        <Tabs
          defaultValue="for you"
          className="w-full flex flex-col justify-center items-start"
        >
          <TabsList>
            <TabsTrigger value="for you">For you</TabsTrigger>
            <TabsTrigger value="subscribed">Subscribed</TabsTrigger>
          </TabsList>
          <TabsContent value="for you">
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
                    likes={item.likes}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="subscribed">
            <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center mx-auto">
              {cardItems.map((item, index) => {
                if (index <= 3) {
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
                }
              })}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

export default Collectibles;
