import { useEffect, useState } from "react";

export const useCounter = (direction) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        let calc;
        if (direction === "forward") calc = prevCounter + 1;
        if (direction === "backward") calc = prevCounter - 1;
        return calc;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};
