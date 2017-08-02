import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import fakeProps from '../../data/frontend-carousel';

export default class Frontend extends Component {
  render() {
    return (
      <section className="l-section">
        <div className="l-container">
          <div className="l-section__inner">
            <h2 className="heading">Frontend</h2>
            <div className="copy">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
          </div>
          <Carousel slides={fakeProps} delay="2000" />
        </div>
      </section>
    );
  }
}
