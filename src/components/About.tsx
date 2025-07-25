import React from 'react';
import { Target, Heart, Users, Award } from 'lucide-react';
import classroomImage from '../assets/images/classroom.png'; 

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every child deserves individualized attention and support tailored to their unique needs.'
    },
    {
      icon: Target,
      title: 'Evidence-Based Approach',
      description: 'We use proven methodologies similar to early intervention programs in Canada and globally.'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'We work closely with families to ensure consistent support across all environments.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Our team consists of qualified professionals with specialized training in autism support.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About Harmony Learning Kenya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are launching with the mission to provide world-class autism support services in Kenya, 
            bringing international best practices to local families and creating a supportive 
            community where every child can thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Harmony Learning Kenya is launching to bridge the gap in autism support services 
                across Kenya. Based in Nairobi, we plan to extend our reach to families throughout 
                the country through our innovative home-based programs.
              </p>
              <p>
                Inspired by successful early intervention models from Canada and other leading 
                countries, we are adapting these evidence-based approaches to suit the unique 
                cultural and social context of Kenyan families.
              </p>
              <p>
                Our comprehensive approach will include direct child support, parent education, 
                and professional development programs that will create a network of informed 
                caregivers and specialists.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={classroomImage} // Replace with the actual path to your image
                alt="Professional working with children"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-colors duration-200">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;