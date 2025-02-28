import React from 'react';
import data from '../data';

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Programming Languages</h3>
          <p className="mt-2">{data.skills.programmingLanguages.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Frameworks & Tools</h3>
          <p className="mt-2">{data.skills.frameworksAndTools.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Networking</h3>
          <p className="mt-2">{data.skills.networking.join(", ")}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Core Competencies</h3>
          <p className="mt-2">{data.skills.coreCompetencies.join(", ")}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;