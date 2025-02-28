import React from 'react';
import data from '../data';

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">About Me</h2>
      <p className="text-lg leading-relaxed">{data.about.summary}</p>
    </div>
  </section>
);

export default About;