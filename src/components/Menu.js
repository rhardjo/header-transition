import React from 'react';

const Menu = ({ items }) => (
  <nav className="flex justify-between">
    {items.map((item, key) => (
      <div className="ml-20 font-bold tracking-wider" key={key}>
        {item}
      </div>
    ))}
  </nav>
);

export default Menu;
