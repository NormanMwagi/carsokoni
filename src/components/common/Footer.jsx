import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

const Footer = () =>
{
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () =>
    {
        if (email)
        {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-white">
            {/* Newsletter Section */}
            <div className="relative">
                {/* Background Image */}
                <div className="h-80 bg-cover bg-center relative" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=400&fit=crop')"
                }}>
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Newsletter Content */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                {/* Left side - stays empty for the car image */}
                                <div></div>

                                {/* Right side - Newsletter signup */}
                                <div className="text-white">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Stay in the Loop! Subscribe for<br />
                                        Exclusive Updates and Insights
                                    </h2>

                                    <div className="flex gap-4 max-w-md">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email..."
                                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        />
                                        <button
                                            onClick={handleSubscribe}
                                            disabled={!email}
                                            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                    {isSubscribed && (
                                        <p className="mt-4 text-green-300 font-semibold">
                                            Thank you for subscribing!
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold">
                                    C
                                </div>
                                <span className="text-xl font-bold">Carsoko</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-sm">
                                Carsoko is your trusted destination to explore, compare, and
                                drive your dream car. From performance reviews to exclusive
                                deals—everything you need in one place.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Brands */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Brands</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Toyota</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Honda</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Nissan</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Mazda</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">More</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Compare Cars</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Finance Deals</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">EV Solutions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Test Drive Booking</a></li>
                            </ul>
                        </div>

                        {/* Support & More */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-3 text-gray-400 mb-6">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dealer Support</a></li>
                            </ul>

                            <h3 className="text-lg font-semibold mb-4">More</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <p className="text-center text-gray-400">
                            © 2025 CarDealer. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;