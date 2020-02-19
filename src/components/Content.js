import React from 'react';

import './Content.pcss';

import { CONTENT_TITLE, CONTENT_TEXT, CONTENT_AMOUNT } from '../statics/constants';

const Content = () => (
  <div className="Content">
    <h1 className="Content__title">{CONTENT_TITLE}</h1>
    {[...Array(CONTENT_AMOUNT)].map((item, idx) => (
      <p className="Content__paragraph" key={idx}>
        {CONTENT_TEXT}
      </p>
    ))}
  </div>
);

export default Content;
