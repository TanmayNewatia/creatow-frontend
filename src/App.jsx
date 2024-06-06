import { useState } from "react";
import Card from "./components/card/card.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import CreatorCard from "./components/creator-card/creatorCard.jsx";
import "./App.css";
import cardItems from "./constants/card.jsx";
import creatorItems from "./constants/creatorConstants.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <section className="w-full bg-[#151329]">
        <div className="w-fit max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center p-2 mx-auto">
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
      <section className="w-full bg-[#100E1F]">
        <div className="w-full max-w-[1260px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 gap-6 place-items-between mx-auto">
          {creatorItems.map((item, index) => {
            return (
              <CreatorCard
                imageURL={item.imageURL}
                cardNo={index + 1}
                amount={item.amount}
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
