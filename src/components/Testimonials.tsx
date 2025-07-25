import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      location: 'Nairobi',
      role: 'Mother of 7-year-old with autism',
      content: 'The home-based program has been life-changing for our family. Our therapist comes twice a week and has helped our son develop communication skills we never thought possible. The progress in just 6 months has been remarkable.',
      rating: 5
    },
    {
      name: 'Dr. James Kiprop',
      location: 'Mombasa',
      role: 'Special Education Teacher',
      content: 'I completed the professional certification course with SpectrumCare Kenya. The training was comprehensive and practical. I now feel confident supporting children with autism in my classroom and have seen significant improvements in my students.',
      rating: 5
    },
    {
      name: 'Grace Achieng',
      location: 'Kisumu',
      role: 'Mother of twins on the spectrum',
      content: 'Having twins on the spectrum felt overwhelming until we found SpectrumCare Kenya. Their family-centered approach and parent training sessions have equipped us with tools to support both our children effectively. The team truly understands our challenges.',
      rating: 5
    }
  ];

  const stats = [
    { number: '95%', label: 'Family Satisfaction Rate' },
    { number: '87%', label: 'Skill Improvement in 6 months' },
    { number: '150+', label: 'Success Stories' },
    { number: '24/7', label: 'Support Availability' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Vision & Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making a meaningful difference in the lives of children on the autism spectrum 
            and their families through evidence-based, compassionate care.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Care</h3>
            <p className="text-gray-600">
              Every child is unique. We will develop individualized programs that respect each child's 
              strengths, challenges, and family context.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Family Partnership</h3>
            <p className="text-gray-600">
              We believe families are the most important part of a child's support team. 
              We will work alongside you every step of the way.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Evidence-Based Practice</h3>
            <p className="text-gray-600">
              Our programs are grounded in research and proven methodologies, 
              adapted for the Kenyan context and cultural values.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our upcoming programs and how we can support your family.
            </p>
            <a
              href="#contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 inline-block"
            >
              Get More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;