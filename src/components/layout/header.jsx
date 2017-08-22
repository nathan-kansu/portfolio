import React from 'react';
import Nav from '../nav';
import nav from '../../data/nav';
import menuSvg from '../../menu.svg';

export default () => (
  <header className="l-header">
    <div className="l-container l-container--nav flex flex--right">
      <Nav items={nav} itemClass="nav__item--l" />
      <div
        className="nav__icon"
        dangerouslySetInnerHTML={{ __html: menuSvg }}
      />
    </div>
  </header>
);
