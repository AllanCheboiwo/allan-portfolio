import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Home = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = 100;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
          vx: 0,
          vy: 0
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (100 - Math.min(distance, 100)) / 100;
        
        particle.vx = particle.vx * 0.9 - dx * force * 0.05;
        particle.vy = particle.vy * 0.9 - dy * force * 0.05;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Return to original position
        particle.vx += (particle.originalX - particle.x) * 0.01;
        particle.vy += (particle.originalY - particle.y) * 0.01;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#333';
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-20">
          <div>
            <h1 className="text-6xl font-light mb-4 text-black">
              {data.personal.name}
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              {data.personal.role}
            </p>
            <p className="text-lg text-gray-800 max-w-2xl">
              {data.personal.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/projects" 
              className="group relative p-6 bg-white border border-gray-200 hover:border-black transition-colors"
            >
              <h2 className="text-2xl font-light text-black mb-2">Projects</h2>
              <p className="text-gray-600 mb-4">View my latest work and side projects</p>
              <span className="text-black group-hover:translate-x-2 transition-transform inline-block">
                View Projects →
              </span>
            </Link>

            <Link 
              to="/experience" 
              className="group relative p-6 bg-white border border-gray-200 hover:border-black transition-colors"
            >
              <h2 className="text-2xl font-light text-black mb-2">Experience</h2>
              <p className="text-gray-600 mb-4">My professional journey and roles</p>
              <span className="text-black group-hover:translate-x-2 transition-transform inline-block">
                View Experience →
              </span>
            </Link>

            <Link 
              to="/education" 
              className="group relative p-6 bg-white border border-gray-200 hover:border-black transition-colors"
            >
              <h2 className="text-2xl font-light text-black mb-2">Education</h2>
              <p className="text-gray-600 mb-4">Academic background and achievements</p>
              <span className="text-black group-hover:translate-x-2 transition-transform inline-block">
                View Education →
              </span>
            </Link>

            <Link 
              to="/skills" 
              className="group relative p-6 bg-white border border-gray-200 hover:border-black transition-colors"
            >
              <h2 className="text-2xl font-light text-black mb-2">Skills</h2>
              <p className="text-gray-600 mb-4">Technical expertise and tools</p>
              <span className="text-black group-hover:translate-x-2 transition-transform inline-block">
                View Skills →
              </span>
            </Link>
          </div>

          <div className="flex space-x-6 justify-center">
            <a 
              href={data.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a 
              href={data.personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${data.personal.contact.email}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 