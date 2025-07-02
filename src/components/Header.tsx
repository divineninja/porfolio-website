'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close menu on navigation
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        Reynaldo Lim Jr
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {[
                            { label: 'Home', id: 'home' },
                            { label: 'About', id: 'about' },
                            { label: 'Skills', id: 'skills' },
                            { label: 'Projects', id: 'projects' },
                            { label: 'Contact', id: 'contact' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Personal info icons/links */}
                    <div className="hidden md:flex items-center space-x-4 ml-8">
                        <a
                            href="https://www.linkedin.com/in/rey-lim-jr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-700 dark:text-gray-300"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg py-6 px-4 flex flex-col space-y-4 animate-fade-in z-50">
                        {[
                            { label: 'Home', id: 'home' },
                            { label: 'About', id: 'about' },
                            { label: 'Skills', id: 'skills' },
                            { label: 'Projects', id: 'projects' },
                            { label: 'Contact', id: 'contact' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium text-lg py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="flex justify-center">
                            <a
                                href="https://www.linkedin.com/in/rey-lim-jr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2 mt-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
