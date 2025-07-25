import React from 'react';
import { Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import classtoysImage from '../assets/images/classtoys.jpg'; 

const HomePrograms = () => {
  const benefits = [
    'Familiar, comfortable environment for the child',    
    'Personalized one-on-one attention',
    'Family involvement and training',
    'Flexible scheduling to fit your routine',
    'Real-world application of skills',
    'Ongoing progress monitoring'
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We conduct a comprehensive assessment of your child\'s needs and family situation.'
    },
    {
      step: '02',
      title: 'Customized Plan',
      description: 'Our team develops a personalized intervention plan tailored to your child\'s goals.'
    },
    {
      step: '03',
      title: 'Professional Assignment',
      description: 'We match you with a qualified professional who specializes in your child\'s specific needs.'
    },
    {
      step: '04',
      title: 'Regular Sessions',
      description: 'Scheduled home visits begin with consistent, professional support and family training.'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Home-Based Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our qualified professionals bring specialized autism support directly to your home, 
            providing personalized care in your child's most comfortable environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Home-Based Support?
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Clock className="h-8 w-8 text-orange-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Hours</h4>
                <p className="text-sm text-gray-600">Sessions scheduled around your family's routine</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-teal-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Nationwide</h4>
                <p className="text-sm text-gray-600">Serving families across Kenya from our Nairobi base</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src={classtoysImage} // Replace with the actual path to your image
                alt="Professional working with child at home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How Our Home Programs Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto font-bold text-lg group-hover:bg-orange-600 transition-colors duration-200">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            <Users className="mr-2 h-5 w-5" />
            Start Your Home Program Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePrograms;