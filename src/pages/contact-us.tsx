

const ContactUs = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800">

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24">
        <div className="absolute inset-0 bg-black/30" /> {/* overlay for contrast */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Let’s Connect With <span className="text-yellow-400">MernKart</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-6">
            Have questions, ideas, or feedback? We’re here to listen and help.  
            Drop us a message and our team will get back to you shortly.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-form"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40 grid md:grid-cols-2 gap-12"
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            Our team is here to assist you. Reach out through any of the
            following methods and we’ll respond as soon as possible.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">📧 Email</h3>
              <p className="text-gray-600">support@mernkart.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📞 Phone</h3>
              <p className="text-gray-600">+977 9812345678</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">📍 Address</h3>
              <p className="text-gray-600">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
