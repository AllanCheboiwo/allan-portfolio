import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = {
    languages: {
      title: 'Programming Languages',
      skills: data.skills.languages
    },
    tools: {
      title: 'Tools & Frameworks',
      skills: data.skills.tools
    },
    networking: {
      title: 'Networking',
      skills: data.skills.networking
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex space-x-6 mb-16 text-xl">
          <Link to="/" className="text-black hover:text-gray-600">
            ← Home
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-black">
            Projects
          </Link>
          <Link to="/experience" className="text-gray-600 hover:text-black">
            Experience
          </Link>
          <span className="text-black">Skills</span>
        </nav>

        <div className="space-y-16">
          <div className="flex space-x-8 text-xl">
            {Object.keys(categories).map(category => (
              <button
                key={category}
                className={`${
                  activeCategory === category
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                } transition-colors`}
                onClick={() => setActiveCategory(category)}
              >
                {categories[category].title}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg text-gray-800">{skill}</span>
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
      </div>
    </div>
  );
};

export default Skills;