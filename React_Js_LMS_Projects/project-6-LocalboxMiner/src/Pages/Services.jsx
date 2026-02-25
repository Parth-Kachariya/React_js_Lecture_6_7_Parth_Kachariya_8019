import React from 'react'

const Services = () => {
 const services = [
    "Web Development",
    "UI/UX Design",
    "React Apps",
    "API Integration",
    "E-commerce",
    "SEO"
  ];

  return (
    <div className="bg-gray-900 text-gray-200 py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {service}
              </h3>
              <p className="text-gray-400">
                Professional {service.toLowerCase()} solutions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services
