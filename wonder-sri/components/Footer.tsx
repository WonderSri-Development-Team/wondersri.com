"use client";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 relative overflow-hidden">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1f34c1] rounded-full flex items-center justify-center">
                <img src="./Logo.png" alt="WonderSri" className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white ml-2">WonderSri</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your ultimate companion for exploring the wonders of Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preview
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: wondersriteam@gmail.com</li>
              <li>Phone: +94 76 157 4543</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/wonder-sri/posts/?feedView=all"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WonderSri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
