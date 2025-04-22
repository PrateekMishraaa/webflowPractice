import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white p-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Column 1 */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li className="font-semibold">Platform</li>
                        <li className="font-semibold">Design</li>
                        <li className="font-semibold">Edit mode</li>
                        <li className="font-semibold">Interactions</li>
                        <li className="font-semibold">Page building <span className="text-green-400">New</span></li>
                        <li className="font-semibold">Shared Libraries <span className="text-green-400">New</span></li>
                        <li className="font-semibold">CMS</li>
                        <li className="font-semibold">Hosting</li>
                        <li className="font-semibold">Localization</li>
                        <li className="font-semibold">Security</li>
                        <li className="font-semibold">Ecommerce</li>
                        <li className="font-semibold">SEO</li>
                        <li className="font-semibold">Accessibility</li>
                        <li className="font-semibold">AI</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li className="font-semibold">About Us</li>
                        <li className="font-semibold">Careers</li>
                        <li className="font-semibold">Blog</li>
                        <li className="font-semibold">Press</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li className="font-semibold">Help Center</li>
                        <li className="font-semibold">Contact Us</li>
                        <li className="font-semibold">Status</li>
                        <li className="font-semibold">FAQ</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li className="font-semibold">Documentation</li>
                        <li className="font-semibold">Guides</li>
                        <li className="font-semibold">Community</li>
                        <li className="font-semibold">Tutorials</li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <ul className="space-y-2">
                        <li className="font-semibold">Twitter</li>
                        <li className="font-semibold">LinkedIn</li>
                        <li className="font-semibold">Facebook</li>
                        <li className="font-semibold">Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
