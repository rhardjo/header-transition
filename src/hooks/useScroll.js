import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

const useScroll = () => {
  // Hooks
  const [scroll, setScroll] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState('up');

  const calculateDirection = () => {
    const direction = scroll > window.scrollY ? 'up' : 'down';
    if (scrollDirection !== direction) setScrollDirection(direction);
  };

  const calculateScroll = () => {
    // Alleen updaten bij een verschil
    if (scroll !== window.scrollY) {
      setScroll(window.scrollY);
      calculateDirection();
    }
  };

  const handleScroll = useCallback(throttle(calculateScroll, 300, { leading: false }, [])); // Voorkom redeclaring bij re-render

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup na unmounting
  });

  return {
    scrollPosition: Number.parseInt(scroll), // Scroll registreert soms floats
    scrollDirection,
  };
};

export default useScroll;
