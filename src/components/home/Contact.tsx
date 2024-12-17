import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Let's discuss your project and see how we can work together to
            create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600">satyakammangate45@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+91 9370973297</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-600">Chhatrapati Sambhaji Nagar</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
