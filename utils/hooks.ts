import React from "react";

export function useBlinkInterval(blinkTimeMs = 1000) {
  const [isBlinking, setIsBlinking] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, blinkTimeMs);

    return () => {
      clearInterval(interval);
    };
  }, [blinkTimeMs]);

  return isBlinking;
}
