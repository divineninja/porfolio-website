export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Fullstack & Backend Developer | Enterprise Web Specialist
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a fullstack and backend developer specializing in building robust, scalable enterprise web applications. My passion lies in solving real-world problems through technology, architecting solutions that drive business value and improve user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With a strong foundation in modern web technologies and a focus on backend systems, I enjoy designing and implementing complex systems, APIs, and integrations. I thrive on challenges and love collaborating with teams to deliver high-quality, maintainable software.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                  <p className="text-3xl font-bold text-blue-600">10+ Years</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projects</h4>
                  <p className="text-3xl font-bold text-purple-600">10+</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    👨‍💻
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
