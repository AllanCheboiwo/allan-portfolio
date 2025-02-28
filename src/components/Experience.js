import React from 'react';
import data from '../data';

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Experience</h2>
      <div className="space-y-12">
        {data.experience.map((exp, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-lg italic">{exp.company} | {exp.duration}</p>
            <ul className="list-disc ml-6 mt-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-sm">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;