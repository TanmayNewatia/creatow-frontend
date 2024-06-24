import React from "react";
import NFTImage from "../../assets/modal/nftImage.png";
import creatorPfp from "../../assets/modal/creatorPfp.png";
import calendarIcon from "../../assets/modal/calendar.svg";
import personIcon from "../../assets/modal/person.svg";
import crossIcon from "../../assets/modal/crossIcon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Card from "../card/card";
import cardItems from "../../constants/card";

function NFTModal(props) {
  return (
    <main className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-20 backdrop-blur-md z-[9999] !overflow-y-auto">
      <section className="relative w-full max-w-[1260px] text-white bg-[#19162f] p-4 lg:p-16 mx-auto my-auto">
        {/* Close button */}
        <button
          onClick={() => props.closeFn(false)}
          className="absolute top-6 right-6"
        >
          <img src={crossIcon} alt="" />
        </button>

        <div className="flex flex-col lg:flex-row gap-8 !overflow-y-scroll">
          {/* Big NFT image */}
          <img
            src={NFTImage}
            alt=""
            className="max-w-[522px] h-fit aspect-square"
          />
          {/* Right content */}
          <div className="w-full space-y-3">
            {/* ULTIMATE Tag */}
            <div className="w-fit h-[32px] bg-card-tag rounded-lg p-[2px]">
              <div className="w-full h-full bg-black text-white rounded-lg flex justify-center items-center text-[14px] font-semibold px-3">
                ULTIMATE
              </div>
            </div>
            {/* NFT Name */}
            <h1 className="text-[40px] font-medium leading-8">ALTA</h1>
            <div className="flex items-center gap-3">
              {/* Creator name */}
              <div className="flex gap-3">
                <img
                  src={creatorPfp}
                  alt=""
                  className="w-[27px] aspect-square"
                />
                <p className="font-bold">Demarco</p>
              </div>
              {/* Date */}
              <div className="flex gap-1">
                <img src={calendarIcon} alt="" />
                <p className="text-[#94A3B8] text-[12px]">07/03/20224</p>
              </div>
              {/* People */}
              <div className="flex gap-1">
                <img src={personIcon} alt="" />
                <p className="text-[#94A3B8] text-[12px]">1</p>
              </div>
            </div>

            {/* About */}
            <div className="w-full border border-[#d0aaff30] rounded-lg space-y-3 p-5">
              <h3 className="font-medium">About</h3>
              <p className="text-[#94A3B8] text-sm leading-8">
                Top 20 Thankers will receive a legendary <br />
                80 random thankers will receive a legendary <br />
                Top 500 thankers are gauranteed a Rare.
              </p>
              <p className="text-[#94A3B8] text-[10px] leading-5 mt-3">
                Last updated: 05/09/2024
              </p>
            </div>

            {/* Metadata */}
            <div className="w-full border border-[#d0aaff30] rounded-lg space-y-3 p-5">
              <h3 className="font-medium">Metadata</h3>
              <p className="text-[#94A3B8] text-sm leading-8">
                Top 20 Thankers will receive a legendary <br />
                Top 500 thankers are gauranteed a Rare.
              </p>
            </div>

            {/* From the same drop */}
            <div className="w-full border border-[#d0aaff30] rounded-lg space-y-3 p-5">
              <h3 className="font-medium">FROM THE SAME DROP</h3>
              <p className="text-[#94A3B8] text-sm leading-8">
                Top 20 Thankers will receive a legendary <br />
                Top 500 thankers are gauranteed a Rare.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom cards carousel - Desktop */}
        <div className="hidden lg:block mt-10 space-y-10">
          <p>More from Demarco</p>
          <Carousel>
            <CarouselContent className="w-fit">
              {cardItems.map((item) => {
                return (
                  <CarouselItem className="basis-1/4 flex justify-center items-center">
                    {/* DISABLED CARD CLICKS WITHIN MODAL FOR NOW */}
                    <div className="pointer-events-none">
                      <Card
                        key={item.id}
                        imageURL={item.imageURL}
                        publishedDate={item.publishedDate}
                        collectors={item.collectors}
                        collectionName={item.collectionName}
                        creatorName={item.creatorName}
                        likes={item.likes}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Bottom cards section - Mobile */}
        <div className="lg:hidden w-fit grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center mt-3 mx-auto">
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

export default NFTModal;
