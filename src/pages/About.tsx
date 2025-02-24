import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';
import jayImage from '/src/image/jay.jpg';


const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and digital strategists dedicated to creating exceptional web solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative digital solutions that drive growth and success. We believe in creating websites that not only look beautiful but also deliver measurable results.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of impactful web and software solutions, known for our creativity, technical excellence, and commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-indigo-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    icon: Users,
    title: 'Client Focus',
    description: 'We put our clients first, ensuring their success is our top priority.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: "We are passionate about creating innovative digital solutions."
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace new technologies and creative approaches.'
  }
];

const team = [
  {
    name: 'Jay Mishra',
    role: 'CEO & Lead Developer',
    image: jayImage,
    bio: '3+ years of experience in web development and team leadership.'
  },
  {
    name: 'Sophie Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Award-winning designer specializing in user experience and brand identity.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Technical Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert in scalable architecture and cloud solutions.'
  }
];

export default About;