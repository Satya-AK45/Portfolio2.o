import React from 'react';

const Quote = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-1 h-24 bg-yellow-400 mx-auto mb-12"></div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Is not just what it looks like and feels like.
          </h3>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Is how it works.
          </h3>
          <p className="text-gray-600 italic">- Steve Jobs</p>
          <div className="w-1 h-24 bg-purple-400 mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Quote;