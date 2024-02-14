import { useWindowSize } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const NaturalStopConfetti = () => {
  const [numberOfPieces, setNumberOfPieces] = useState(200); // Start with 200 pieces
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Set off the confetti by initially having a non-zero number of pieces
    let interval = setInterval(() => {
      setNumberOfPieces((prevNumber) => {
        if (prevNumber <= 0) {
          clearInterval(interval); // Stop the interval when reaching 0 pieces
          return 0;
        }
        return prevNumber - 20; // Decrease the number of pieces gradually
      });
    }, 1000); // Adjust timing to suit

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div>
      <Confetti width={width} height={height} numberOfPieces={numberOfPieces} />
    </div>
  );
};

export default NaturalStopConfetti;
