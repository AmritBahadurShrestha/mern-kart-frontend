
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">
          At <span className="font-semibold">MernKart</span>, your privacy is our top priority. 
          This Privacy Policy explains how we collect, use, and protect your personal information when you shop with us.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Personal details such as your name, email address, phone number, and shipping address.</li>
          <li>Payment information (processed securely through trusted payment gateways).</li>
          <li>Browsing and purchase history to improve your shopping experience.</li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-2">We use your information to:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Process and deliver your orders.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send promotional offers, if you opt in.</li>
          <li>Improve our website, products, and services.</li>
        </ul>

        {/* Data Protection */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="text-gray-600">
          We implement strict security measures to protect your personal data from unauthorized access, 
          alteration, or disclosure. All sensitive payment information is encrypted and processed securely.
        </p>

        {/* Sharing Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Information</h2>
        <p className="text-gray-600">
          We do not sell or rent your personal information to third parties. 
          However, we may share necessary data with trusted partners (such as payment providers, delivery services) 
          to complete your orders efficiently.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
        <p className="text-gray-600">
          Our website uses cookies to enhance your shopping experience by remembering preferences 
          and analyzing site traffic. You may disable cookies in your browser settings, 
          but some features may not work correctly.
        </p>

        {/* Your Rights */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or request deletion of your personal information. 
          To exercise these rights, please contact us at <span className="font-semibold">support@mernkart.com</span>.
        </p>

        {/* Changes */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time to reflect new practices or regulations. 
          Any changes will be posted on this page with an updated revision date.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us at:  
          <br />
          📧 <span className="font-semibold">support@mernkart.com</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
