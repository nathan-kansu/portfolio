import React from 'react';
import Hero from '../sections/hero';
import About from '../sections/about';
import Frontend from '../sections/frontend';
import Backend from '../sections/backend';
import Contact from '../sections/contact';
import DevOps from '../sections/devops';

export default () => (
  <main className="l-main">
    <Hero />
    <About />
    <Frontend />
    <Backend />
    <DevOps />
    <Contact />
  </main>
);

