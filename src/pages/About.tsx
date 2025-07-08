import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
          About Our Shop
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="text-pink-500 font-semibold">ShopEase</span>, we’re passionate about making online shopping simple, stylish, and seamless. From everyday essentials to exclusive collections — we bring the best to your doorstep.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">✨ What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Latest trends in fashion & lifestyle</li>
              <li>Premium quality at affordable prices</li>
              <li>Fast & secure delivery nationwide</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Our Story</h2>
            <p className="text-gray-600">
              Founded in 2021, ShopEase started as a small local venture and quickly grew into a loved destination for thousands of happy shoppers. Our mission is to make every shopping experience joyful, convenient, and rewarding.
            </p>
          </div>
        </div>

        <div className="bg-pink-50 p-10 rounded-xl text-center shadow-lg">
          <h3 className="text-3xl font-bold text-pink-600 mb-4">❤️ Trusted by Thousands</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We believe in building long-term relationships with our customers. With over 25,000+ satisfied buyers and growing, your trust fuels our growth.
          </p>
        </div>

        <div className="mt-16 text-center">
          <img
            src="https://source.unsplash.com/featured/?shopping,ecommerce,store"
            alt="Shopping experience"
            className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
