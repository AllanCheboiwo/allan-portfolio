import React from 'react';
import data from '../data';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">Contact Me</h2>
      <p className="text-lg">Reach out to discuss opportunities:</p>
      <p className="mt-2">Email: <a href={`mailto:${data.contact.email}`} className="text-yellow-400 hover:underline">{data.contact.email}</a></p>
      <p>Phone: {data.contact.phone}</p>
      <p className="mt-4">
        Connect on <a href={data.contact.linkedin} className="text-yellow-400 hover:underline">LinkedIn</a> or{' '}
        <a href={data.contact.github} className="text-yellow-400 hover:underline">GitHub</a>
      </p>
    </div>
  </section>
);

export default Contact;