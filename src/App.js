import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';

const App = () => {
  const heroHeight = 450;

  return (
    <React.Fragment>
      <Header offset={heroHeight} />
      <Hero height={heroHeight} />
      <Content />
    </React.Fragment>
  );
};

export default App;
