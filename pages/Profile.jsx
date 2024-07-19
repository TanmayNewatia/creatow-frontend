import React from "react";
import Navbar from "../src/components/navbar/navbar";
import profilePfp from "../src/assets/profile/profilepfp.png";
import dotsIcon from "../src/assets/profile/dotsIcon.svg";
import pencilIcon from "../src/assets/profile/pencilIcon.svg";
import walletIcon from "../src/assets/profile/walletIcon.svg";
import copyIcon from "../src/assets/profile/copyIcon.svg";
import cardItems from "../src/constants/card";
import Card from "../src/components/card/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../src/components/ui/tabs";

function Profile() {
  return (
    <main className="min-h-screen bg-[#0d0a1b]">
      <Navbar />

      {/* Top purple banner */}
      <section className="w-full max-w-[1400px] h-[50vh] lg:h-[200px] bg-gradient-to-r from-[#5247af] to-[#4b40ae] via-[#7620ee] lg:rounded-b-2xl mx-auto"></section>

      {/* Content */}
      <section className="w-full max-w-[1300px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 mx-auto">
        {/* Profile card */}
        <div className="w-fit h-fit bg-[#151329] text-white p-6 space-y-5 rounded-2xl mt-[-350px] lg:mt-[-80px]">
          {/* Profile image */}
          <img
            src={profilePfp}
            alt=""
            className="max-w-[254px] aspect-square rounded-md"
          />

          {/* Name & joined date */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-readex-pro text-2xl font-extrabold leading-6">
                lofikiss
              </p>
              <button>
                <img src={dotsIcon} alt="" />
              </button>
            </div>
            {/* Joined date */}
            <p className="text-sm opacity-65">Joined 20-04-2012</p>
          </div>

          {/* Wallet address */}
          <div className="bg-[#201a41] flex justify-between items-center rounded-md p-2">
            <div className="flex gap-2">
              <img src={walletIcon} alt="" />
              <p className="max-w-[120px] text-sm text-[#9A8FFF] truncate">
                3213124142412412312
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText("copied text")}
            >
              <img src={copyIcon} alt="" />
            </button>
          </div>

          {/* Stats */}
          <div className="pb-8">
            <div className="flex justify-between py-3 border-b border-[#1e1c31]">
              <p>Subscription</p>
              <p className="font-semibold">54</p>
            </div>
            <div className="flex justify-between py-3 border-b border-[#1e1c31]">
              <p>Collectibles</p>
              <p className="font-semibold">03</p>
            </div>
            <div className="flex justify-between py-3">
              <p>Thanks</p>
              <p className="font-semibold">01</p>
            </div>
          </div>

          {/* Edit profile button */}
          <button className="w-full bg-white flex justify-center items-center gap-2 py-3 rounded-3xl">
            <p className="text-black font-medium">Edit your Profile</p>
            <img src={pencilIcon} alt="" />
          </button>
        </div>

        {/* Cards tab group */}
        <section className="max-w-[1260px] h-fit bg-[#151329] mt-10 mx-auto">
          <Tabs
            defaultValue="for you"
            className="w-full flex flex-col justify-center items-start"
          >
            <TabsList className="bg-[#0d0a1b] flex justify-center items-center lg:justify-start">
              <TabsTrigger value="for you">My Collections</TabsTrigger>
              <TabsTrigger value="subscribed">My Appreciations</TabsTrigger>
            </TabsList>
            <TabsContent value="for you">
              <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center px-4 lg:px-8 lg:pt-4 pb-8 mx-auto">
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
              <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center px-4 lg:px-8 lg:pt-4 pb-8 mx-auto">
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
      </section>
    </main>
  );
}

export default Profile;
