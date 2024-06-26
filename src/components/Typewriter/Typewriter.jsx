import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, speed, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let textTimeout;
    let cursorTimeout;

    const typeText = () => {
      if (currentIndex < texts.length) {
        const currentWord = texts[currentIndex];
        setCurrentText(
          (prevText) => prevText + currentWord.charAt(currentText.length)
        );
        if (currentText.length < currentWord.length) {
          textTimeout = setTimeout(typeText, speed);
        } else {
          cursorTimeout = setTimeout(() => {
            setIsCursorVisible(false);
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setCurrentText("");
            // Add a delay before typing the next text
            textTimeout = setTimeout(typeText, delay);
          }, speed);
        }
      } else if (infinite) {
        setCurrentIndex(0);
        textTimeout = setTimeout(typeText, speed);
      }
    };

    const blinkCursor = () => {
      setIsCursorVisible((prev) => !prev);
      cursorTimeout = setTimeout(blinkCursor, 500);
    };

    textTimeout = setTimeout(typeText, speed);

    blinkCursor(); // Start cursor blinking

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(cursorTimeout);
    };
  }, [currentText, currentIndex, texts, speed, delay, infinite]);

  return (
    <div>
      <span>{currentText}</span>
      {isCursorVisible && <span>|</span>}
    </div>
  );
};

export default Typewriter;
