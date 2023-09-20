import React, { useState, useEffect } from "react";

interface ReturnValue {
  currentIndex: number;
  keyDownHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const useArrowKeyNavigation = (arrLength: number): ReturnValue => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const keyboardEventHandlers: { [key: string]: () => void } = {
    ArrowUp: () => setCurrentIndex((prev) => (prev - 1 + arrLength) % arrLength),
    ArrowDown: () => setCurrentIndex((prev) => (prev + 1) % arrLength),
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const handler = keyboardEventHandlers[event.key];

    if (handler) {
      event.preventDefault();
      handler();
    }
  };

  useEffect(() => {
    setCurrentIndex(-1);
  }, [arrLength]);

  return { currentIndex, keyDownHandler };
};

export default useArrowKeyNavigation;
