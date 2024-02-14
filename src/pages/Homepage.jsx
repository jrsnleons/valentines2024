import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ImageCard } from "../components";

function Homepage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [currentImage, setCurrentImage] = useState(
    "../../public/mochi-cat-flowers.gif"
  );

  const text = "boop! Macey, will you be my valentine?";

  const noImages = [
    "../../public/angry-1.gif",
    "../../public/angry2.gif",
    "../../public/cri.gif",
    "../../public/sadge.gif",
    "../../public/sad1.gif",
  ];

  const noText = ["Please ;-;", "why :<", "huhu sige na", "pls master", "won't u let me? :("];

  const [noImageIndex, setNoImageIndex] = useState(0);

  const yesFunction = () => {
    navigate("/yes");
  };

  const noFunction = () => {
    // Update the currentImage based on noImages array
    setCurrentImage(noImages[noImageIndex]);
    setNoImageIndex((prevIndex) => {
      // Increment the index or reset to 0 if at the end of the array
      const nextIndex = prevIndex + 1 < noImages.length ? prevIndex + 1 : 0;
      return nextIndex;
    });
    setDisplayText(noText[noImageIndex]);
    
  };

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        {" "}
        <ImageCard imageURL={currentImage} />
      </motion.div>
      <div className="text-2xl mx-3 text-white font-bold">{displayText}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8 }}
        className="flex flex-row justify-center gap-4 w-full"
      >
        <Button callback={yesFunction}>Yes</Button>
        <Button callback={noFunction}>No</Button>
      </motion.div>
    </div>
  );
}

export default Homepage;
