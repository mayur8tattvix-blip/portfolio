import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Users, Code, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { AnimatedBanner } from '../components/ui/AnimatedBanner';
import projectsData from '../data/projects.json';

export const PortfolioDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeSection, setActiveSection] = useState('description');

  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (!isAutoPlaying || !project) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, project]);

  if (!project) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Link to="/portfolio" className="text-blue-600 hover:text-blue-700">← Back to Portfolio</Link>
      </div>
    );
  }

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.sliderImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.sliderImages.length) % project.sliderImages.length);
    setIsAutoPlaying(false);
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
            <div 
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.sliderImages[currentImageIndex]}
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
              {project.sliderImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsAutoPlaying(false);
                  }}
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
              {/* Interactive Section Tabs */}
              <div className="flex space-x-4 mb-6">
                {[
                  { id: 'description', label: 'Short Description' },
                  { id: 'features', label: 'Technical Features' },
                  { id: 'technologies', label: 'Technologies' }
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              <Card>
                <AnimatePresence mode="wait">
                  {activeSection === 'description' && (
                    <motion.div
                      key="description"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Project Overview
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {project.shortDescription}
                      </p>
                    </motion.div>
                  )}

                  {activeSection === 'features' && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Technical Features
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.technicalFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <Zap className="text-green-500 flex-shrink-0" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === 'technologies' && (
                    <motion.div
                      key="technologies"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Technologies Used
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg text-center border border-blue-200 dark:border-blue-800"
                          >
                            <span className="font-semibold text-blue-700 dark:text-blue-300">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
              

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