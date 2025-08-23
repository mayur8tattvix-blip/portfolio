import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Team: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: 'Senior Software Architect',
      role: 'Co-Founder & Technical Lead',
      experience: '6+ Years Experience',
      description: 'Leading our technical vision with expertise in full-stack development, cloud architecture, and AI integration.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'AI/ML Implementation', 'System Design', 'Team Leadership'],
      education: 'B.Tech in Computer Science',
      certifications: ['AWS Solutions Architect', 'Azure Developer Associate'],
    },
    {
      name: 'Business Analyst',
      role: 'Co-Founder & Strategy Lead',
      experience: 'Business Strategy Specialist',
      description: 'Bridges the gap between business needs and technical solutions with expertise in requirement gathering and process optimization.',
      expertise: ['Business Analysis', 'Project Management', 'Process Optimization', 'Stakeholder Management', 'Strategic Planning'],
      education: 'MBA, B.Tech',
      certifications: ['Certified Business Analysis Professional (CBAP)', 'Scrum Master'],
    },
    {
      name: 'Senior Software Developer',
      role: 'Full-Stack Development Specialist',
      experience: '4+ Years Experience',
      description: 'Passionate about creating robust, scalable applications with clean code and optimal performance.',
      expertise: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development', 'DevOps & CI/CD'],
      education: 'B.Tech in Computer Science',
      certifications: ['React Certified Developer', 'Node.js Professional'],
    },
    {
      name: 'Python Specialist',
      role: 'AI/ML & Backend Expert',
      experience: 'AI/ML Development Focus',
      description: 'Specialized in Python development with focus on AI/ML applications, data processing, and backend services.',
      expertise: ['Python Development', 'Machine Learning & AI', 'Data Processing', 'API Development', 'Database Integration'],
      education: 'B.Tech in Computer Science',
      certifications: ['Python Institute Certified', 'TensorFlow Developer'],
    },
    {
      name: 'UI/UX Designer',
      role: 'Design & User Experience Specialist',
      experience: '3+ Years Experience',
      description: 'Creates intuitive, engaging user experiences that convert visitors into customers.',
      expertise: ['UI/UX Design', 'Figma & Design Tools', 'User Research', 'Prototyping', 'Design Systems'],
      education: "Bachelor's in Design",
      certifications: ['Google UX Design Certificate', 'Adobe Certified Expert'],
    },
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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Behind every great solution is a great team. Our diverse group of experts brings together 
              years of experience in software development, AI, cloud computing, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer">
                  {/* Profile Image */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                    <img src="/tattvix_logo.png" alt="Tattvix Solutions" className="w-full h-full object-contain" />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {member.experience}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{member.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center space-x-1">
                        <Award size={12} />
                        <span>Education</span>
                      </div>
                      <span>{member.education}</span>
                    </div>
                    
                    <div className="flex justify-center space-x-3 mt-4">
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <Linkedin size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <Mail size={16} className="text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Continuous Learning',
                description: 'We invest in our team\'s growth through training, certifications, and conference participation.',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and open communication.',
              },
              {
                title: 'Innovation',
                description: 'We encourage experimentation and creative problem-solving.',
              },
              {
                title: 'Work-Life Balance',
                description: 'We maintain a healthy work environment that promotes productivity and well-being.',
              },
            ].map((culture, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {culture.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {culture.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};