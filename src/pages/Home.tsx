import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Build, You Grow: Custom Websites for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Empowering Your Digital Presence with Tailored Solutions
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="mt-4 flex justify-center space-x-4 text-gray-600">
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" /> Fast Delivery
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" /> SEO-Friendly
              </span>
              <span className="flex items-center">
                <Shield className="h-5 w-5 mr-2" /> 24/7 Support
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
                <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Elevate Your Digital Presence?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Users,
    title: 'Website Development',
    description: 'Custom designs that capture your brand\'s essence and deliver exceptional user experiences.',
  },
  {
    icon: Shield,
    title: 'E-commerce Solutions',
    description: 'Scalable and secure online stores that help you reach customers worldwide.',
  },
  {
    icon: Clock,
    title: 'Website Maintenance',
    description: 'Keep your site secure and up-to-date with our comprehensive maintenance services.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Solutions Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Working with WebCraft was a game-changer for our business. They delivered a beautiful website that perfectly represents our brand.',
  },
  {
    name: 'Michael Chen',
    company: 'Growth Marketing',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'The team\'s expertise in SEO and digital marketing helped us achieve remarkable growth in online visibility.',
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Studios',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Exceptional service and support. They went above and beyond to ensure our website exceeded expectations.',
  },
];

export default Home;