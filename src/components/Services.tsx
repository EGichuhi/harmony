import React from 'react';
import { Users, BookOpen, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Children\'s Programs',
      description: 'Comprehensive developmental programs designed specifically for children on the autism spectrum.',
      features: [
        'Individual therapy sessions',
        'Group social skills training',
        'Behavioral intervention plans',
        'Communication development',
        'Sensory integration therapy'
      ],
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Parent & Professional Courses',
      description: 'Educational programs to equip parents and professionals with essential skills and knowledge.',
      features: [
        'Parent training workshops',
        'Professional certification courses',
        'Behavior management strategies',
        'Communication techniques',
        'Support group facilitation'
      ],
      color: 'green'
    },
    {
      icon: Home,
      title: 'Home-Based Programs',
      description: 'Personalized in-home interventions bringing professional support directly to your family.',
      features: [
        'One-on-one home visits',
        'Family environment assessment',
        'Customized intervention plans',
        'Parent coaching sessions',
        'Progress monitoring and reporting'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-purple-50',
        icon: 'text-purple-500',
        button: 'bg-purple-500 hover:bg-purple-600',
        border: 'border-purple-200 hover:border-purple-300'
      },
      green: {
        bg: 'bg-teal-50',
        icon: 'text-teal-500',
        button: 'bg-teal-500 hover:bg-teal-600',
        border: 'border-teal-200 hover:border-teal-300'
      },
      purple: {
        bg: 'bg-pink-50',
        icon: 'text-pink-500',
        button: 'bg-pink-500 hover:bg-pink-600',
        border: 'border-pink-200 hover:border-pink-300'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to support children on the autism spectrum, 
            their families, and the professionals who work with them.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full ${colors.button} text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center group`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;