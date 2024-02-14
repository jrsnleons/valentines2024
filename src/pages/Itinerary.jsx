import { useEffect, useState } from "react";
import { ConfettiExplosion, ImageCard } from "../components";

function Itinerary() {
  const [displayText, setDisplayText] = useState("");
  const text = "Yay! You're my valentine! fufufu";

  useEffect(() => {
    let index = 0;
    const normalDelay = 110; // Normal delay between letters
    const commaDelay = 1000; // Longer delay after a comma

    const displayNextLetter = () => {
      if (index < text.length) {
        setDisplayText(text.substr(0, index + 1));
        index++;

        const delay = text[index - 1] === "," ? commaDelay : normalDelay;

        setTimeout(displayNextLetter, delay);
      }
    };

    displayNextLetter();
  }, []);

  return (
    <div className="bg-neutral-900 flex flex-col h-screen justify-center items-center gap-4">
      <ConfettiExplosion />
      <ImageCard imageURL="/happi.gif" />
      <div className="text-2xl mx-3 text-purple-300 font-bold">
        {displayText}
      </div>
      <div className="text-l mx-3 text-neutral-500 ">
        * i'll pick you up after ur last class hehe I have smthn to give u hehe donchu worry i have planned for this fufu *
      </div>
    </div>
  );
}

export default Itinerary;
