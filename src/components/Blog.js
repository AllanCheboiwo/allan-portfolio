import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tech', name: 'Technology' },
    { id: 'career', name: 'Career' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn about modern architecture patterns and best practices for building scalable web applications...',
      category: 'tech',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      featured: true
    },
    {
      id: 2,
      title: 'My Journey in Software Development',
      excerpt: 'From university to professional development: lessons learned and insights gained...',
      category: 'career',
      date: 'March 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1503437313881-503a91226402',
      featured: true
    },
    {
      id: 3,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'A comprehensive guide to setting up and using React with TypeScript...',
      category: 'tutorials',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Blog</h2>
        
        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {posts.filter(post => post.featured).map(post => (
            <div key={post.id} className="group relative overflow-hidden rounded-xl bg-gray-800 transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 p-6">
                <span className="text-yellow-400 text-sm font-semibold">{post.category.toUpperCase()}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{post.title}</h3>
                <p className="text-gray-300 mt-2">{post.excerpt}</p>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-400 hover:text-yellow-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-yellow-400 text-sm font-semibold">
                  {post.category.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold mt-2">{post.title}</h3>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <button className="mt-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">Get notified about new articles and tech insights.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;