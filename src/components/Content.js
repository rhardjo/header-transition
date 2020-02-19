import React from 'react';

import './Content.pcss';

const CONTENT_TITLE = 'Amet';
const CONTENT_PARAGRAPH = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit, deserunt perferendis quae nobis
reiciendis odit atque incidunt beatae tenetur unde quaerat voluptates fugiat, ducimus quos qui libero, eveniet
ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

const Content = () => (
  <div className="Content">
    <h1 className="Content__title">{CONTENT_TITLE}</h1>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
    <p className="Content__paragraph">{CONTENT_PARAGRAPH}</p>
  </div>
);

export default Content;
