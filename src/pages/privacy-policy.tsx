

const PrivacyPolicy = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-800">

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 py-20 text-white">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            Your privacy matters to us. Learn how we protect and handle your data at MernKart.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-40">
        <div className="bg-white shadow-lg rounded-2xl p-10 space-y-8">
          <p className="text-gray-600">
            At <span className="font-semibold">MernKart</span>, your privacy is our top priority. 
            This Privacy Policy explains how we collect, use, and protect your personal information when you shop with us.
          </p>

          {/* Sections */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Personal details such as your name, email, phone number, and shipping address.</li>
                  <li>Payment information (processed securely through trusted payment gateways).</li>
                  <li>Browsing and purchase history to improve your shopping experience.</li>
                </ul>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <>
                  <p className="text-gray-600 mb-2">We use your information to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Process and deliver your orders.</li>
                    <li>Provide customer support and respond to inquiries.</li>
                    <li>Send promotional offers, if you opt in.</li>
                    <li>Improve our website, products, and services.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Data Protection",
              content: (
                <p className="text-gray-600">
                  We implement strict security measures to protect your personal data from unauthorized access, alteration, or disclosure. All sensitive payment information is encrypted and processed securely.
                </p>
              ),
            },
            {
              title: "4. Sharing Information",
              content: (
                <p className="text-gray-600">
                  We do not sell or rent your personal information to third parties. 
                  However, we may share necessary data with trusted partners (payment providers, delivery services) to complete your orders efficiently.
                </p>
              ),
            },
            {
              title: "5. Cookies & Tracking",
              content: (
                <p className="text-gray-600">
                  Our website uses cookies to enhance your shopping experience by remembering preferences and analyzing site traffic. You may disable cookies in your browser settings, but some features may not work correctly.
                </p>
              ),
            },
            {
              title: "6. Your Rights",
              content: (
                <p className="text-gray-600">
                  You have the right to access, update, or request deletion of your personal information. 
                  To exercise these rights, please contact us at <span className="font-semibold">support@mernkart.com</span>.
                </p>
              ),
            },
            {
              title: "7. Changes to This Policy",
              content: (
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time to reflect new practices or regulations. Any changes will be posted on this page with an updated revision date.
                </p>
              ),
            },
            {
              title: "8. Contact Us",
              content: (
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:  
                  <br />
                  📧 <span className="font-semibold">support@mernkart.com</span>
                </p>
              ),
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">{section.title}</h2>
              {section.content}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
