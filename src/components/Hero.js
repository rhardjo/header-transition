import React from 'react';

const Hero = ({ height }) => {
  const heroStyle = {
    height: `${height}px`,
    backgroundImage: `url(https://picsum.photos/1920/${height})`,
  };
  return <div className="w-full bg-cover bg-no-repeat" style={heroStyle} />;
};

export default Hero;
