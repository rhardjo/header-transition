import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import Menu from './Menu.js';

import useScroll from '../hooks/useScroll';

const items = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur'];

const Header = ({ offset }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const scrollPosition = useScroll();
  const isPastOffset = scrollPosition >= offset;

  const classname = cn(
    'px-10 py-5 w-full flex justify-between items-center fixed text-white transition duration-150 ease-in-out',
    {
      'bg-gray-800': isPastOffset,
      'bg-transparent': !isPastOffset,
    }
  );

  return (
    <header className={classname}>
      <h1 className="text-3xl font-black">MYLOGO</h1>
      <Menu items={items} />
    </header>
  );
};

export default Header;
