import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from './icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    // Add event listener for keyboard navigation
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <header className="w-full bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] py-4 border-b border-cyan-500/30 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 relative mr-3">
                <img
                  src="/favicon.webp"
                  width={48}
                  height={48}
                  alt="Aptlantis Logo"
                  className="object-cover h-full w-full rounded-full border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 brightness-110 contrast-110"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Aptlantis</h1>
                <p className="text-sm text-cyan-400">Linux Distribution Mirrors</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-6 text-sm"
            aria-label="Main Navigation"
          >
            <Link
              to="/"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Home
            </Link>
            {/* Distributions link removed as it would just be the main page */}
            {/* Museum link hidden until functionality is working */}
            {/* <Link
              to="/museum"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Museum
            </Link> */}
            {/* Flash ISO link hidden as requested */}
            {/* <Link
              to="/flash-iso"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Flash ISO to USB
            </Link> */}
            <Link
              to="/coding-weird-stuff"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Coding Weird Stuff
            </Link>
            <Link
              to="/volunteer"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Volunteer
            </Link>

            <Link
              to="/irc"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              IRC Chat
            </Link>
            <Link
              to="/onboarding"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Onboarding
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMenu}
              className="p-2 rounded-md bg-gray-700 text-gray-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-4 py-4 border-t border-gray-700 animate-fadeIn"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Home
              </Link>
              {/* Distributions link removed as it would just be the main page */}
              {/* Museum link hidden until functionality is working */}
              {/* <Link
                to="/museum"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Museum
              </Link> */}
              {/* Flash ISO link hidden as requested */}
              {/* <Link
                to="/flash-iso"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Flash ISO to USB
              </Link> */}
              <Link
                to="/coding-weird-stuff"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Coding Weird Stuff
              </Link>
              <Link
                to="/volunteer"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Volunteer
              </Link>
              {/* IRC Chat link hidden until functionality is working */}
              {/* <Link
                to="/irc"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                IRC Chat
              </Link> */}
              <Link
                to="/onboarding"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Onboarding
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
