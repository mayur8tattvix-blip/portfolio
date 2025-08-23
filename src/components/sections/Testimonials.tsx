import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Tattvix Solutions delivered our e-commerce platform ahead of schedule with exceptional quality. Their AI-powered recommendation engine increased our sales by 40%.",
      author: "Tech Startup CEO",
      company: "E-commerce Platform",
      rating: 5,
    },
    {
      quote: "The cloud migration project saved us 60% on infrastructure costs while improving our application performance significantly.",
      author: "Manufacturing Company CTO",
      company: "Manufacturing Industry",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real feedback from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full relative">
                <Quote className="absolute top-4 right-4 text-blue-200 dark:text-blue-800" size={32} />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};