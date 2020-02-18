import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

const useScroll = () => {
  // Hooks
  const [scroll, setScroll] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(window.scrollY);

  const calculateScroll = () => {
    // Alleen updaten bij een verschil
    if (scroll !== window.scrollY) {
      setScroll((prevState) => {
        // setScroll onthoud zijn laatste positie, hiermee berekenen we welke richting er wordt gescrolld
        const direction = prevState > window.scrollY ? 'up' : 'down';
        if (scrollDirection !== direction) setScrollDirection(direction);

        return window.scrollY;
      });
    }
  };

  const scrollHandler = useCallback(throttle(calculateScroll, 300, { leading: false }, [setScroll]));

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler); // Cleanup na unmounting
  });

  return {
    scrollPosition: Number.parseInt(scroll), // Scroll registreert soms floats
    scrollDirection,
  };
};

export default useScroll;
