import React from 'react';
import data from '../data';

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-sm">Tech: {project.tech}</p>
            <a href={project.github} className="text-yellow-400 hover:underline mt-2 block">
              GitHub ({project.repoType})
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;