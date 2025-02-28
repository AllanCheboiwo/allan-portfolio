import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex space-x-6 mb-16 text-xl">
          <Link to="/" className="text-black hover:text-gray-600">
            ← Home
          </Link>
        </nav>
        
        <div className="space-y-16">
          {data.projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl font-light mb-4 text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm text-gray-600 bg-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-black hover:text-gray-600 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              <div 
                className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  transform: hoveredProject === index ? 'scale(1)' : 'scale(0.95)',
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

export default Projects;