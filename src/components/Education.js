import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Education = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex space-x-6 mb-16 text-xl">
          <Link to="/" className="text-black hover:text-gray-600">
            ← Home
          </Link>
        </nav>

        <div className="space-y-16">
          {data.education.map((edu, index) => (
            <div key={index} className="group relative">
              <div className="mb-6">
                <h2 className="text-3xl font-light text-black group-hover:text-gray-600 transition-colors mb-2">
                  {edu.institution}
                </h2>
                <p className="text-xl text-gray-600">{edu.location}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-black mb-1">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.duration}</p>
                </div>

                <div className="space-y-4 mt-6">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="group/detail relative">
                      <p className="text-gray-800 max-w-2xl group-hover/detail:text-black transition-colors">
                        {detail}
                      </p>
                      <div 
                        className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover/detail:opacity-100 transition-opacity"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 