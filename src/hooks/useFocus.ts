import { useState } from "react";

const useFocus = () => {
  const [isFocus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return { isFocus, focusHandler, blurHandler };
};

export default useFocus;
