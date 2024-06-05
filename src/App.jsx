import { useState } from "react";
import Card from "./components/card/card.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import "./App.css";
import cardItems from "./constants/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <section className="w-full bg-[#151329]">
        <div className="w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 place-items-center p-2 mx-auto">
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
    </>
  );
}

export default App;
