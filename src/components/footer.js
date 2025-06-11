import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-10 flex justify-around">
        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">Contact Us</h3>
          <div className="space-y-1 text-gray-300">
            <p>Email: <a href="mailto:contact@investate.com" className="hover:text-white transition-colors">contact@investate.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 234 567 890</a></p>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} InVestate. All rights reserved.
      </div>
    </footer>
  );
}