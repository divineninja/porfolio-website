'use client';

import { useState } from 'react';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const skillCategories = {
        frontend: [
            { name: 'React', level: 90, icon: '⚛️' },
            { name: 'Next.js', level: 85, icon: '🔺' },
            { name: 'TypeScript', level: 88, icon: '📘' },
            { name: 'Tailwind CSS', level: 92, icon: '🎨' },
            { name: 'JavaScript', level: 90, icon: '📜' },
            { name: 'HTML/CSS', level: 95, icon: '🌐' },
        ],
        backend: [
            { name: 'Node.js', level: 40, icon: '🟢' },
            { name: 'PHP', level: 95, icon: '🐘' },
            { name: 'PostgreSQL', level: 90, icon: '🐘' },
            { name: 'MySQL', level: 88, icon: '🦦' },
            { name: 'GraphQL', level: 70, icon: '🔗' },
            { name: 'REST APIs', level: 88, icon: '🔌' },
        ],
        tools: [
            { name: 'Git', level: 90, icon: '📝' },
            { name: 'Docker', level: 75, icon: '🐳' },
            { name: 'AWS', level: 60, icon: '☁️' },
            { name: 'Linux', level: 85, icon: '🐧' },
            { name: 'VS Code', level: 95, icon: '💻' },
            { name: 'cPanel', level: 88, icon: '🛡️' },
        ],
    };

    const categories = [
        { id: 'frontend', label: 'Frontend', icon: '🎨' },
        { id: 'backend', label: 'Backend', icon: '⚙️' },
        { id: 'tools', label: 'Tools', icon: '🛠️' },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mx-1 ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
                            <div
                                key={skill.name}
                                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{skill.icon}</span>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {skill.name}
                                    </h3>
                                </div>

                                <div className="mb-2">
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        <span>Proficiency</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 text-center">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                Always Learning
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends,
                                frameworks, and best practices in web development.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['AI/ML', 'Cloud Architecture', 'Mobile Development'].map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
