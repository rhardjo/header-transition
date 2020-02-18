import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

/** Returnt de y position van je window. */
const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const scrollHandler = throttle(() => {
    scroll !== window.scrollY && setScroll(window.scrollY); // Alleen updaten als de waarde anders is
  }, 150);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    scrollHandler(); // Afvuren tijdens mounting om scroll positie te checken na bijv. reload

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return Number.parseInt(scroll);
};

export default useScroll;
