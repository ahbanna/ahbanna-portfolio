import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className={`cursor ${isClicking ? "click" : ""} ${
          isHovering ? "hover" : ""
        }`}
        style={{
          transform: `translate3d(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%), 0)`,
        }}
      ></div>
      {/* <div
        className={`cursor2 ${isClicking ? "cursorinnerhover" : ""}`}
        style={{
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        }}
      ></div> */}
    </>
  );
};

export default CustomCursor;
