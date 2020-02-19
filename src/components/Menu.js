import React from 'react';
import cn from 'classnames';

import CloseIcon from '../statics/svg/ico-close.svg';
import MenuIcon from '../statics/svg/ico-menu.svg';

import './Menu.pcss';

const Menu = ({ items, isOpen, isButtonVisible, handleToggleMenu }) => {
  const navClassname = cn('Menu__navigation', {
    'Menu__navigation--visible': isOpen,
    'Menu__navigation--hidden': !isOpen,
  });
  const buttonClassname = cn('Menu__toggle', {
    'Menu__toggle--visible': isButtonVisible,
    'Menu__toggle--hidden': !isButtonVisible,
  });

  return (
    <div className="Menu">
      <nav className={navClassname}>
        {isOpen &&
          items.map((item, key) => (
            <button className="Menu__item" key={key}>
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
