import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Experience = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex space-x-6 mb-16 text-xl">
          <Link to="/" className="text-black hover:text-gray-600">
            ← Home
          </Link>
        </nav>

        <div className="space-y-16">
          {data.experience.map((exp, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-3xl font-light text-black group-hover:text-gray-600 transition-colors">
                  {exp.title}
                </h2>
                <span className="text-gray-600">{exp.duration || exp.period}</span>
              </div>
              <p className="text-xl text-gray-600 mb-4">
                {exp.company}
                {exp.location && <span> · {exp.location}</span>}
              </p>
              {exp.description ? (
                <p className="text-gray-800 max-w-2xl">{exp.description}</p>
              ) : (
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li 
                      key={i} 
                      className="text-gray-800 max-w-2xl group-hover:text-black transition-colors flex items-start"
                    >
                      <span className="mr-2 text-gray-400">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              )}
              <div 
                className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  transform: 'scale(0.98)',
                  transition: 'transform 0.3s ease-out'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;