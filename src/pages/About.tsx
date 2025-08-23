import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends and continuously explore new possibilities.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver exceptional solutions that meet the highest standards of performance and reliability.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain open communication and provide clear project visibility throughout the development process.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, acting as their trusted technology advisors.',
    },
  ];

  const advantages = [
    'Technical Excellence: Deep expertise across multiple industries and technologies',
    'Agile Approach: Rapid delivery with flexibility and continuous collaboration',
    'Global Standards: International quality with competitive pricing',
    'End-to-End Solutions: Comprehensive services from consultation to support',
    'Innovation Focus: Leveraging AI and cloud computing for competitive advantage',
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Tattvix Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions since 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded in 2024, Tattvix Solutions emerged from a vision to bridge the gap between 
                cutting-edge technology and practical business solutions. Based in Ahmedabad, Gujarat, 
                we are a passionate team of technologists, designers, and strategists committed to 
                transforming businesses through intelligent software solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our journey began with a simple belief: that every business, regardless of size, 
                deserves access to world-class technology solutions that can drive growth and innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-80 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center p-8"
            >
              <img src="/tattvix_logo.png" alt="Tattvix Solutions" className="max-w-full max-h-full object-contain opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </Card>
            <Card>
              <Eye className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses seeking to leverage AI, 
                cloud computing, and modern software development practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Tattvix Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Heart className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Office Location
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Tattvix Solutions Pvt. Ltd.</p>
                <p>Science City Road</p>
                <p>Ahmedabad, Gujarat - 380060</p>
                <p>India</p>
                <p className="mt-4">
                  <strong>Working Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 7:00 PM IST
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};