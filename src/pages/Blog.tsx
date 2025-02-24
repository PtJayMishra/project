import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl">Insights, tips, and trends in web development and digital marketing</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={post.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to advanced user experiences.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2025',
    author: 'Jay Mishra',
    link: '#'
  },
  {
    title: 'Maximizing SEO Performance for Your Business Website',
    excerpt: 'Learn effective strategies to improve your websites search engine rankings and attract more organic traffic.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 12, 2025',
    author: 'Sarah Johnson',
    link: '#'
  },
  {
    title: 'Essential Security Practices for E-commerce Websites',
    excerpt: 'Protect your online store with these crucial security measures and best practices.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 10, 2025',
    author: 'Michael Chen',
    link: '#'
  },
  {
    title: 'Designing for User Experience: Key Principles',
    excerpt: 'Master the fundamentals of UX design to create websites that delight and engage users.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 8, 2025',
    author: 'Emily Rodriguez',
    link: '#'
  },
  {
    title: 'Mobile-First Development: Best Practices',
    excerpt: 'Learn how to build responsive websites that provide exceptional mobile experiences.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 5, 2025',
    author: 'Alex Thompson',
    link: '#'
  },
  {
    title: 'Optimizing Website Performance for Better Conversion',
    excerpt: 'Discover techniques to improve your websites speed and performance for higher conversion rates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 3, 2025',
    author: 'Jessica Lee',
    link: '#'
  }
];

export default Blog;