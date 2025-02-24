import React from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

const Consultation = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      company: (document.getElementById('company') as HTMLInputElement).value,
      service: (document.getElementById('service') as HTMLSelectElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
      consultationType: (document.getElementById('consultation-type') as HTMLSelectElement).value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Form Submitted');
        window.location.reload(); // Refresh the page
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Consultation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Schedule a free consultation with our experts to discuss your project needs and discover how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Book Your Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select a service</option>
                <option value="website">Website Development</option>
                <option value="ecommerce">E-commerce Solutions</option>
                <option value="maintenance">Website Maintenance</option>
                <option value="seo">SEO & Digital Marketing</option>
                <option value="custom">Custom Software Development</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Tell us about your project and requirements"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="consultation-type" className="block text-sm font-medium text-gray-700">
                Preferred Consultation Type
              </label>
              <select
                id="consultation-type"
                name="consultation-type"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="video">Video Call</option>
                <option value="phone">Phone Call</option>
                <option value="in-person">In-Person Meeting</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Schedule Consultation
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Choose a time that works best for you with our flexible scheduling options.'
  },
  {
    icon: Clock,
    title: '30-Minute Session',
    description: 'Get valuable insights and recommendations in a focused 30-minute consultation.'
  },
  {
    icon: Video,
    title: 'Multiple Options',
    description: 'Connect via video call, phone, or in-person meeting based on your preference.'
  },
  {
    icon: MessageSquare,
    title: 'Expert Advice',
    description: 'Receive personalized guidance from our experienced team of professionals.'
  }
];

export default Consultation;