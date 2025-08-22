

const AboutUs = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 py-24 text-white">
        <div className="absolute inset-0 bg-black/30" /> {/* overlay for contrast */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            We Are <span className="text-yellow-400">MERN Kart</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-6">
            A modern e-commerce platform built with the MERN stack — designed to
            make online shopping simple, secure, and seamless for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MERN Kart started with a simple idea: bring technology and
            convenience together to transform the way people shop. We are not
            just building another online store — we’re building an experience
            that’s fast, reliable, and customer-focused.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With the power of MongoDB, Express, React, and Node.js, we’ve built
            a scalable platform that adapts to your needs, ensuring shopping is
            not just easy, but enjoyable.
          </p>
        </div>
        
        {/* Image collage */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <img
            src="https://source.unsplash.com/400x400/?online,shopping"
            alt="Shop Experience"
            className="rounded-2xl shadow-md w-full h-full object-cover row-span-2"
          />
          <img
            src="https://source.unsplash.com/200x200/?technology,ecommerce"
            alt="Technology"
            className="rounded-2xl shadow-md w-full h-full object-cover"
          />
          <img
            src="https://source.unsplash.com/200x200/?team,work"
            alt="Team Work"
            className="rounded-2xl shadow-md w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="relative bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center md:text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide a seamless and trustworthy online shopping experience where quality products meet cutting-edge technology.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center md:text-left hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognized globally as the go-to destination for effortless online shopping — powered by innovation and customer trust.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MERN Kart?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Fast & Reliable</h3>
            <p className="text-gray-600">
              Enjoy smooth navigation, quick product search, and secure checkout
              built with performance in mind.
            </p>
          </div>
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600">
              Every feature we build starts with one question: how will this
              make shopping easier for our customers?
            </p>
          </div>
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
            <p className="text-gray-600">
              With the latest technology, we ensure your data and transactions
              remain safe at all times.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
