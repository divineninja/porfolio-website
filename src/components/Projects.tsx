'use client';

import { useState } from 'react';
import Image from 'next/image';

// Dynamically get assetPrefix from next.config.js
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '/portfolio-website';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'ConnectCare NL/ES',
            description: 'A clean and user-friendly WordPress website built with the Divi page builder, designed for Conec Care, a company that provides innovative care aids to help individuals regain independence. The site highlights their mission, products, expert advice, and services, offering visitors a seamless experience to learn more and get in touch. The design focuses on accessibility, ease of navigation, and responsive functionality across all devices.',
            image: '/projects/coneccare.nl.png',
            tags: ['WordPress', 'Divi', 'CSS', 'Javascript'],
            category: 'frontend',
            liveUrl: 'https://coneccare.nl/',
            githubUrl: '#',
            featured: false,
        },
        {
            id: 2,
            title: 'US Local Directory Dashboard',
            description: 'A dashboard application developed in 2016 built with Vue, designed for intuitive data visualization and management. This project demonstrates my skills in front-end development, component-based architecture, and dashboard UI/UX best practices.',
            image: '/projects/uslocal-directory-dashboard.png',
            tags: ['VueJS', 'MySQL', 'Laravel 6', 'Vuetify', 'AWS', 'Blade'],
            category: 'backend',
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 3,
            title: 'US Local Directory Dashboard Version 2',
            description: 'This project is a web-based admin panel application designed for efficient data management and user administration. It provides a modern, responsive interface with features such as authentication, CRUD operations, and role-based access control.',
            image: '/projects/uslocal-directory-dashboard-v2.png',
            tags: ['Laravel 11', 'Filament 3', 'PHP', 'Tailwind CSS', 'MySQL', 'Javascript', 'Livewire', 'Docker', 'AWS'],
            category: 'fullstack',
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            id: 4,
            title: 'LaraClean (rlimjr/lara-clean)',
            description: 'A Laravel package and CLI tool to help developers build domain-driven design (DDD) applications. LaraClean can generate classes, models, and migrations in a DDD structure, streamlining the process of building scalable, maintainable Laravel projects.',
            image: '/projects/lara-clean.png', // Add an image to public/projects/laraclean.png for best results
            tags: ['Laravel', 'PHP', 'Domain-Driven Design', 'CLI', 'Open Source'],
            category: 'backend',
            liveUrl: 'https://packagist.org/packages/rlimjr/lara-clean',
            githubUrl: 'https://github.com/divineninja/lara-clean',
            featured: false,
        },
        {
            id: 5,
            title: 'US Local Directory Website',
            description: 'USLD Dashboard client built with Nuxt.js and Vue. This project serves as the front-end interface for the USLD Dashboard, offering modern, responsive UI components and seamless interaction with backend services.',
            image: '/projects/uslcoaldirectory.png',
            tags: ['NuxtJS', 'HTML', 'Blade', 'API'],
            category: 'frontend',
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },

    ];

    const filters = [
        { id: 'all', label: 'All Projects', icon: '🌟' },
        { id: 'frontend', label: 'Frontend', icon: '🎨' },
        { id: 'backend', label: 'Backend', icon: '⚙️' },
        { id: 'fullstack', label: 'Full Stack', icon: '🚀' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A collection of projects that showcase my skills and passion for creating innovative solutions.
                        </p>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic" aria-live="polite">
                            Note: Some of my projects are private and require client approval before they can be included in my portfolio.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filters.map((filterOption) => (
                            <button
                                key={filterOption.id}
                                onClick={() => setFilter(filterOption.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === filterOption.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <span className="mr-2">{filterOption.icon}</span>
                                {filterOption.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}

                                <div className="relative overflow-hidden">
                                    {/* Use Next.js Image for optimization */}
                                    <Image
                                        src={`${assetPrefix}${project.image}`}
                                        alt={project.title}
                                        width={600}
                                        height={256}
                                        className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Project Links */}
                                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.liveUrl}
                                            className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
                                            aria-label="View live project"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
                                            aria-label="View source code"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    {/* <div className="text-center mt-16">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Want to see more of my work?
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <span>View All Projects</span>
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
