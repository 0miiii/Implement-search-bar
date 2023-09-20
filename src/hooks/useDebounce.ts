import { useState } from "react";

const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimeoutId(newTimeoutId);
  };

  return debouncedCallback;
};

export default useDebounce;
