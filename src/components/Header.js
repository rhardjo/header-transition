import React, { useEffect, useState } from 'react';
import cn from 'classnames';

// Components
import Menu from './Menu.js';

// Hooks
import useScroll from '../hooks/useScroll';

// Constants
const MENU_ITEMS = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur'];
const NAME_LOGO = 'Dolorem';

const Header = ({ offset }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isPastOffset, setIsPastOffset] = useState(false);
  const { scrollPosition, scrollDirection } = useScroll();

  const handleToggleMenu = () => setIsMenuOpen((prevValue) => !prevValue);

  useEffect(() => {
    const calculatedOffset = scrollPosition >= offset;
    if (calculatedOffset !== isPastOffset) {
      setIsPastOffset(calculatedOffset);
    }
  });

  const headerClassname = cn(
    'px-10 py-5 w-full flex justify-between items-center fixed transition-colors duration-100 ease-in-out',
    {
      'bg-gray-800': isPastOffset && isMenuOpen,
      'bg-transparent': !isPastOffset && !isMenuOpen,
    }
  );

  const logoClassname = cn('text-3xl font-black uppercase transition-colors duration-200', {
    'text-black': isPastOffset && !isMenuOpen,
    'text-white': !isPastOffset || isMenuOpen,
  });

  // className={`text-3xl font-black transition-colors duration-200 ${
  //   isPastOffset && !isMenuOpen ? 'text-black' : 'text-white'
  // }`}

  return (
    <header className={headerClassname}>
      <h1 className={logoClassname}>{NAME_LOGO}</h1>
      <Menu isOpen={isMenuOpen} isButtonVisible={isPastOffset} handleToggleMenu={handleToggleMenu} items={MENU_ITEMS} />
    </header>
  );
};

export default Header;
