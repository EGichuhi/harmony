import React from 'react';
import { ArrowRight, MapPin, Users, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Based in Nairobi, Kenya</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Supporting Children on the 
                <span className="text-orange-500"> Autism Spectrum</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide comprehensive programs for children on the spectrum, professional training for parents and caregivers, and personalized home-based interventions across Kenya.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 flex items-center justify-center group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8468021/pexels-photo-8468021.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Child engaged in therapeutic activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;