import React from 'react';

import Menu from './Menu.js';

const items = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur'];

const Header = () => (
  <header className="px-10 py-5 bg-gray-800 w-full flex justify-between items-center fixed text-white">
    <h1 className="text-3xl font-black">MYLOGO</h1>
    <Menu items={items} />
  </header>
);

export default Header;
