import { useEffect, useState } from "react";

//Simple hook to detect the window size,

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const detectWindowSize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);

    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowSize]);

  return { windowSize };
};
