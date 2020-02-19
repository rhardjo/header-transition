import React, { useEffect, useState } from 'react';
import cn from 'classnames';

// Components
import Menu from './Menu.js';

import useScroll from '../hooks/useScroll';

// Constants
const MENU_ITEMS = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur'];
const NAME_LOGO = 'Dolorem';

const Header = ({ offset }) => {
  // State hooks
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isPastOffset, setIsPastOffset] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const handleToggleMenu = () => setIsMenuOpen((prevValue) => !prevValue);

  // Functional hooks
  const { scrollPosition, scrollDirection } = useScroll();

  useEffect(() => {
    const calculatedOffset = scrollPosition >= offset;
    const calculateIsUp = scrollDirection === 'up';

    // Alleen updaten als de waarde veranderd
    if (isScrolledUp !== calculateIsUp) setIsScrolledUp(calculateIsUp);
    if (calculatedOffset !== isPastOffset) setIsPastOffset(calculatedOffset);
  }, [scrollPosition, scrollDirection]);

  useEffect(() => {
    if (isPastOffset === false) setIsMenuOpen(true); // Menu willen we altijd zichtbaar bij de hero
  }, [isPastOffset]);

  useEffect(() => {
    setIsMenuOpen(isScrolledUp); // Vuur eenmaal af bij elke change, hierdoor kun je nog togglen met de button
  }, [isScrolledUp]);

  const headerClassname = cn(
    'px-10 py-5 w-full flex justify-between items-center fixed transition-colors duration-150',
    {
      'bg-gray-800': isPastOffset && isMenuOpen,
      'bg-transparent': !isPastOffset && !isMenuOpen,
    }
  );

  const logoClassname = cn('text-3xl font-black uppercase transition-colors duration-200', {
    'text-black': isPastOffset && !isMenuOpen,
    'text-white': !isPastOffset || isMenuOpen,
  });

  return (
    <header className={headerClassname}>
      <h1 className={logoClassname}>{NAME_LOGO}</h1>
      <Menu isOpen={isMenuOpen} isButtonVisible={isPastOffset} handleToggleMenu={handleToggleMenu} items={MENU_ITEMS} />
    </header>
  );
};

export default Header;
