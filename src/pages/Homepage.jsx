import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ImageCard } from "../components";

function Homepage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [currentImage, setCurrentImage] = useState("/mochi-cat-flowers.gif");

  const text = "boop! Macey, will you be my valentine?";

  const noImages = [
    "/angry-1.gif",
    "/angry2.gif",
    "/cri.gif",
    "/sadge.gif",
    "/sad1.gif",
  ];

  const noText = [
    "Please ;-;",
    "why :<",
    "huhu sige na",
    "pls master",
    "won't u let me? :(",
  ];

  const [noImageIndex, setNoImageIndex] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const yesFunction = () => {
    navigate("/yes");
  };

  const noFunction = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const top = Math.random() * (screenHeight - 50); // 50 is an approximate button height
    const left = Math.random() * (screenWidth - 100); // 100 is an approximate button width
    setButtonPosition({ top: `${top}px`, left: `${left}px` });

    setCurrentImage(noImages[noImageIndex]);
    setNoImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1 < noImages.length ? prevIndex + 1 : 0;
      return nextIndex;
    });
    setDisplayText(noText[noImageIndex]);
  };

  useEffect(() => {
    let index = 0;
    const normalDelay = 110;
    const commaDelay = 1000;

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <ImageCard imageURL={currentImage} />
      </motion.div>
      <div className="text-2xl mx-3 text-white font-bold">{displayText}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8 }}
        className="flex flex-row justify-center gap-4 w-full"
      >
        {/* The "Yes" button remains stationary and is placed outside of the div that moves */}
        <Button callback={yesFunction} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Yes</Button>
        {/* Dynamically position only the "No" button */}
        <Button
          callback={noFunction}
          style={{
            position: "absolute",
            top: buttonPosition.top,
            left: buttonPosition.left,
          }}
        >
          No
        </Button>
      </motion.div>
    </div>
  );
}

export default Homepage;
