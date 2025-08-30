import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Users, Code, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AnimatedBanner } from '../components/ui/AnimatedBanner';

export const PortfolioDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectDetails = {
    '1': {
      title: 'E-Commerce Platform with AI Recommendations',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution featuring AI-powered product recommendations, real-time inventory management, and seamless payment integration. Built with modern technologies to deliver exceptional user experience and drive business growth.',
      client: 'RetailTech Solutions',
      duration: '4 months',
      team: '5 developers',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Stripe', 'AWS'],
      results: ['40% increase in sales', '60% better user engagement', '35% reduction in cart abandonment'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&sat=-100',
      ],
      features: [
        'AI-powered product recommendations',
        'Real-time inventory management',
        'Secure payment gateway integration',
        'Advanced analytics dashboard',
        'Mobile-responsive design',
        'Multi-vendor support'
      ],
      challenges: [
        'Implementing real-time inventory sync across multiple warehouses',
        'Building scalable AI recommendation engine',
        'Ensuring PCI DSS compliance for payment processing'
      ],
      solutions: [
        'Developed microservices architecture for better scalability',
        'Implemented machine learning algorithms for personalized recommendations',
        'Used Redis for real-time data caching and synchronization'
      ]
    }
  };

  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">← Back to Portfolio</Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <AnimatedBanner
        title={project.title}
        subtitle={`${project.category} • ${project.client}`}
      >
        <div className="mt-8">
          <Link to="/portfolio" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </AnimatedBanner>

      {/* Image Slider */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="text-gray-600 dark:text-gray-300" size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="text-gray-600 dark:text-gray-300" size={24} />
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-blue-600 scale-110'
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Zap className="text-green-500 flex-shrink-0" size={16} />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
                
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Project Info
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Duration</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Team Size</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.team}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Code className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Client</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{project.client}</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Results Achieved
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Zap className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};