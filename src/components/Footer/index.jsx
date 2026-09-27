import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-auto bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    {/* Brand / About Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">MyStore</h3>
                        <p className="text-sm text-gray-400">
                            Your one-stop destination for all your shopping needs. Quality products delivered right to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-md font-medium mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="/cart" className="hover:text-white transition-colors">Cart</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter / Socials */}
                    <div>
                        <h4 className="text-white text-md font-medium mb-3">Stay Connected</h4>
                        <p className="text-sm text-gray-400 mb-3">Subscribe to get special offers and updates.</p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-3 py-2 text-sm bg-gray-800 text-white rounded-l focus:outline-none w-full"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 text-sm rounded-r transition-colors">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Divider & Copyright */}
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Yashraj. All rights are Mine.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;