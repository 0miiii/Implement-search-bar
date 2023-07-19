import { useState } from "react";

export const useFocus = () => {
  const [isFocus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return { isFocus, focusHandler, blurHandler };
};
