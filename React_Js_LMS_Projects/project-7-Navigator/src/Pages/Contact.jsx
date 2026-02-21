import React from 'react'

const Contact = () => {
 return (
    <div className="bg-gray-900 text-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 bg-gray-800 p-8">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400">
            We would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white focus:border-blue-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white focus:border-blue-500 outline-none"
            ></textarea>

            <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 bg-gray-800 p-8 rounded-2xl ">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Our Office
              </h3>
              <p className="text-gray-400">
                Surat, Gujarat, India
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Email
              </h3>
              <p className="text-gray-400">
                infotech@company.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact
