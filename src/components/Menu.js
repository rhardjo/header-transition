import React from 'react';
import cn from 'classnames';

const Menu = ({ items, isOpen, isButtonVisible, handleToggleMenu }) => {
  const classname = cn('flex justify-end', {
    'opacity-100': isOpen,
    'opacity-0': !isOpen,
  });
  const buttonClassname = cn('transition-all duration-150 h-12 bg-gray-800 rounded-sm text-white flex-none', {
    'w-0 opacity-0': !isButtonVisible,
    'w-12 ml-10 opacity-100': isButtonVisible,
  });

  return (
    <div className="inline-flex items-center">
      <nav className={classname}>
        {isOpen &&
          items.map((item, key) => (
            <div className="ml-16 text-lg font-bold tracking-wider text-white" key={key}>
              {item}
            </div>
          ))}
      </nav>
      <button className={buttonClassname} onClick={handleToggleMenu}>
        {isOpen ? 'x' : '='}
      </button>
    </div>
  );
};

export default Menu;
