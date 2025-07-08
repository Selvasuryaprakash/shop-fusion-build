import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phonenumber: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  phonenumber: "",
  message: "",
};


const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.phonenumber) newErrors.phonenumber = "Phone number is required.";
    else if (!/^\+?\d{10,15}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Phone number is invalid.";
    }

    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  };


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
      <div className="max-w-xl mx-auto p-6 bg-sky-100 shadow-md rounded-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {submitted && (
          <p className="mb-4 text-green-600 font-medium">Message sent successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-none py-2 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-none py-2 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border-none py-2 rounded-md"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-600 text-sm">
                +91
              </span>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter 10-digit number"
              />
            </div>
            {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-6">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border-none py-2 rounded-md"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>

  );
};

export default Contact;
