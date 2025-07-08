import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 sm:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>

        <p className="text-center text-lg text-gray-600 mb-12">
          We’re here to help. Reach out to us anytime — whether it’s a question, a suggestion, or just to say hi!
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Email */}
          <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
            <Mail className="text-pink-500 w-6 h-6" />
            <div>
              <p className="text-gray-800 font-semibold">Email</p>
              <a href="mailto:support@shopease.com" className="text-pink-600 hover:underline">
                dally@garments.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
            <Phone className="text-pink-500 w-6 h-6" />
            <div>
              <p className="text-gray-800 font-semibold">Call Us</p>
              <a href="tel:+919876543210" className="text-pink-600 hover:underline">
                +91 6382674855
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm sm:col-span-2">
            <Linkedin className="text-pink-500 w-6 h-6" />
            <div>
              <p className="text-gray-800 font-semibold">LinkedIn</p>
              <a
                href="https://linkedin.com/company/Dally"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                linkedin.com/company/Dally
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">We typically respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
