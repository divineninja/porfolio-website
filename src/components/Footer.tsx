export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Portfolio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate developer creating innovative web solutions with modern technologies. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', icon: '📁', href: '#' },
                { name: 'LinkedIn', icon: '💼', href: '#' },
                { name: 'Twitter', icon: '🐦', href: '#' },
                { name: 'Email', icon: '📧', href: 'mailto:limreynaldojr@gmail.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <a href="mailto:limreynaldojr@gmail.com" className="hover:text-blue-400 transition-colors">
                  limreynaldojr@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📱</span>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">
                  +63 (968) 648 9760
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Iloilo City, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Rey Lim Jr. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
