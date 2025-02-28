import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import lionRoar from '../assets/lion-roar.json';
import data from '../data';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = data.personal.tagline;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [showContent, fullText]);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      {!showContent ? (
        <div className="transform scale-150">
          <Lottie
            animationData={lionRoar}
            className="w-full max-w-xl"
            loop={false}
          />
        </div>
      ) : (
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 animate-fade-in">
            {data.personal.name}
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 h-20 typing-cursor">
            {typedText}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
            <a
              href="#projects"
              className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-yellow-400">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;