import React from 'react';
import cn from 'classnames';

import CloseIcon from '../assets/svg/ico-close.svg';
import MenuIcon from '../assets/svg/ico-menu.svg';

import './Menu.pcss';

const Menu = ({ items, isOpen, isButtonVisible, handleToggleMenu }) => {
  const navClassname = cn('flex justify-end', {
    'opacity-100': isOpen,
    'opacity-0': !isOpen,
  });
  const buttonClassname = cn('transition-all duration-150 h-12 rounded-sm text-white flex-none outline-none', {
    'w-0 opacity-0': !isButtonVisible,
    'w-12 ml-10 opacity-100 bg-gray-800': isButtonVisible,
  });

  return (
    <div className="inline-flex items-center">
      <nav className={navClassname}>
        {isOpen &&
          items.map((item, key) => (
            <button className="ml-16 text-lg font-bold tracking-wider text-white" key={key}>
              {item}
            </button>
          ))}
      </nav>
      <button className={buttonClassname} onClick={handleToggleMenu}>
        {isOpen ? (
          <CloseIcon className="Menu__icon Menu__icon--close" />
        ) : (
          <MenuIcon className="Menu__icon Menu__icon--burger" />
        )}
      </button>
    </div>
  );
};

export default Menu;
