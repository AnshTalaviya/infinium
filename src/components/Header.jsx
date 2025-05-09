import { NavLink } from 'react-router-dom';
import { Menu, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const MobileNavLink = ({ to, label }) => (
    <NavLink
        to={to}
        className="text-gray-900 hover:text-teal-700 font-medium"
        onClick={() => window.scrollTo(0, 0)}
    >
        {label}
    </NavLink>
);

export default function Header() {
    const [hideTopBar, setHideTopBar] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideTopBar(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full">
            {/* Top Info Bar */}
            <div
                className={`bg-teal-900 text-white py-2 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${hideTopBar ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                <div className="container mx-auto flex flex-wrap justify-between text-base font-medium px-4">
                    <div className="flex flex-wrap items-center space-x-6">
                        <a href="tel:+911234567890" className="flex items-center space-x-1 transition-colors">
                            <Phone size={14} />
                            <span>+91 1234567890</span>
                        </a>
                        <a
                            href="mailto:info@infiniumfinance.com"
                            className="flex items-center space-x-1 transition-colors"
                        >
                            <Mail size={14} />
                            <span>info@infiniumfinance.com</span>
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>Ahmedabad, Maharashtra</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`w-full bg-white hidden md:block transition-all duration-300 ${hideTopBar ? 'shadow-md py-2 mt-0 fixed top-0 left-0 right-0 z-40' : 'py-2 mt-[30px]'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://68199ce7b80a86dab6bac1b0--rococo-mousse-fc58f1.netlify.app/logo.png"
                            alt="Infinium Finance Logo"
                            className="h-[130px] w-[130px] object-contain transition-transform hover:rotate-12"
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-8 text-md font-semibold leading-6 text-gray-900">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/about', label: 'About Us' },
                            { to: '/plans', label: 'Investment Plans' },
                            { to: '/how-it-works', label: 'How It Works' },
                            { to: '/calculator', label: 'Calculator' },
                            { to: '/faqs', label: 'FAQs' },
                            { to: '/contact', label: 'Contact' },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="relative group text-gray-900 hover:text-teal-700 font-medium"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-medium py-2 px-6 rounded">
                        Login / Register
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden ${mobileMenuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="flex flex-col space-y-3 pb-3">
                        <MobileNavLink to="/" label="Home" />
                        <MobileNavLink to="/about" label="About Us" />
                        <MobileNavLink to="/plans" label="Investment Plans" />
                        <MobileNavLink to="/how-it-works" label="How It Works" />
                        <MobileNavLink to="/calculator" label="Calculator" />
                        <MobileNavLink to="/faqs" label="FAQs" />
                        <MobileNavLink to="/contact" label="Contact" />
                        <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-medium py-2 px-4 rounded mt-2">
                            Login / Register
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}