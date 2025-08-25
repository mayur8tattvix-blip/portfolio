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
      author: "Sarah Johnson",
      company: "TechFlow Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The cloud migration project saved us 60% on infrastructure costs while improving our application performance significantly.",
      author: "Michael Chen",
      company: "InnovateCorp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Outstanding UI/UX design that transformed our user engagement. Our app downloads increased by 200% after the redesign.",
      author: "Emily Rodriguez",
      company: "StartupHub",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Their AI chatbot solution revolutionized our customer service. Response time improved by 80% and customer satisfaction soared.",
      author: "David Kumar",
      company: "ServicePro Ltd.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Exceptional custom software development. They understood our complex requirements and delivered a solution that exceeded expectations.",
      author: "Lisa Thompson",
      company: "FinanceFlow",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Professional team with deep technical expertise. Their cloud architecture recommendations saved us thousands in operational costs.",
      author: "James Wilson",
      company: "CloudTech Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Incredible attention to detail and commitment to quality. Our mobile app now ranks #1 in our category thanks to their expertise.",
      author: "Amanda Foster",
      company: "MobileFirst Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "From concept to deployment, Tattvix guided us through every step. Their agile approach ensured we launched on time and within budget.",
      author: "Robert Martinez",
      company: "AgileWorks",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
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

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="w-80 flex-shrink-0"
              >
                <Card className="h-full relative">
                  <Quote className="absolute top-4 right-4 text-blue-200 dark:text-blue-800" size={32} />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};