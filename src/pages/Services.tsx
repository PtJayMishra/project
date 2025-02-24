import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ShoppingCart, Shield, Search, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8">Comprehensive digital solutions for your business growth</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <Link
            to="/consultation"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom websites that reflect your brand identity while ensuring optimal user experience.',
    features: [
      'Responsive Design',
      'SEO-Optimized',
      'Fast Loading Times',
      'CMS Integration',
      'Custom Functionality'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores that drive sales and provide seamless shopping experiences.',
    features: [
      'Secure Payment Integration',
      'Inventory Management',
      'User-Friendly Checkout',
      'Mobile Optimization',
      'Order Tracking'
    ]
  },
  {
    icon: Shield,
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and performing at its best.',
    features: [
      'Security Updates',
      'Bug Fixes',
      'Content Updates',
      'Performance Optimization',
      '24/7 Support'
    ]
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility and attract your target audience.',
    features: [
      'SEO Audits & Strategy',
      'Keyword Research',
      'Content Marketing',
      'Social Media Marketing',
      'Analytics & Reporting'
    ]
  },
  {
    icon: Settings,
    title: 'Custom Software Solutions',
    description: 'Tailor-made applications designed to meet your unique business needs.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'Enterprise Solutions',
      'API Integration',
      'Cloud Services'
    ]
  }
];

export default Services;