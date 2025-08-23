import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Palette } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ServicesOverview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build robust, scalable applications tailored to your business needs using modern technologies and frameworks.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Integrate intelligent automation, predictive analytics, and ML models to transform your business operations.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate, optimize, and manage your infrastructure on AWS, Azure, and Google Cloud platforms.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create intuitive, engaging user experiences that convert visitors into customers.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full text-center group cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};