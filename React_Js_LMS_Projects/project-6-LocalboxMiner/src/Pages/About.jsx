import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-200  py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 border px-8 py-10 bg-gray-800 border-gray-400 rounded-xl">
          <h2 className="text-5xl font-bold text-white mb-6">
            Who We Are
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We build scalable, modern and high-performance web applications
            using React and modern frontend technologies.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className='border p-4 flex flex-col gap-4 border-gray-400 rounded-xl'>

              <h3 className="text-3xl font-semibold text-blue-500">
                Our Mission
              </h3>
              <p className="text-gray-400">
                To help businesses grow digitally by creating powerful and
                user-friendly web platforms.
              </p>
            </div>
            <div className='border p-4 flex flex-col gap-4 border-gray-400 rounded-xl'>

              <h3 className="text-3xl font-semibold text-blue-500">
                Our Vision
              </h3>
              <p className="text-gray-400">
                To become a trusted global partner for innovative web solutions.
              </p>
            </div>

          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              Our team focuses on clean UI, responsive design and optimized
              performance. We believe in simplicity, scalability and strong
              architecture.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About
