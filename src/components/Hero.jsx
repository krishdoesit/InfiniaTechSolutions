import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
import bgvideo from '../assets/data_layer_background.mp4';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
      >
        <source src={bgvideo} type='video/mp4' />
        Your Browser does not support video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Ideas Into
            <span className="text-blue-500"> Digital Reality</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            We create innovative solutions that drive business growth
            and enhance user experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <AnchorLink
              href="#services"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 text-lg font-semibold"> Our Services
            </AnchorLink>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white rounded-full transition-colors duration-300 text-lg font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or Tailwind config
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.5s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 1s forwards;
  opacity: 0;
}
`;
