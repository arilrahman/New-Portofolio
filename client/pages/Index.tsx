import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Twitter, Youtube, BookOpen, Mail, ExternalLink, Instagram, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "JavaScript",
    "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS", "Git", "Figma"
  ];

  const projects = [
    {
      title: "StudyBuddy",
      description: "A Laravel-based task management web app I built to help users manage their final assignments in a more structured and efficient way.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc8137230b4634424997bef63129279d1%2F76a09a5ddd544c6384747bd345661459?format=webp&width=800",
      link: "https://studdybuddy.kesug.com/public",
      github: "https://github.com/arilrahman/StudyBuddy"
    },
    {
      title: "WeatherWatch",
      description: "A weather app built with React that provides up-to-date weather information from various cities with a simple and user-friendly interface.",
      technologies: ["React.js", "Vite", "Weather API", "CSS"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc8137230b4634424997bef63129279d1%2Fec7f7aac3a9641d6a9eab275bb4c692f?format=webp&width=800",
      link: "https://weather-watch-eight.vercel.app/",
      github: "https://github.com/arilrahman/WeatherWatch"
    },
    {
      title: "MovieApp",
      description: "A weekly project as part of my frontend learning. This app displays movie information from an external API with search functionality and a responsive design.",
      technologies: ["React.js", "Vite", "MovieDB API", "Tailwind CSS"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Fc8137230b4634424997bef63129279d1%2F6c452de5c4b54e1382ce99892633cf59?format=webp&width=800",
      link: "https://movie-app-vite-iota.vercel.app/",
      github: "https://github.com/arilrahman/MovieApp"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/chairil-rahman-88b6812a4/", label: "LinkedIn" },
    { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/airill_rahmn/", label: "Instagram" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/arilrahman", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div>
        {/* Top Navigation */}
        <nav className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CR</span>
              </div>
              <span className="ml-3 font-bold text-xl text-gray-900">CHAIRIL RAHMAN</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium tracking-wider">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium tracking-wider">ABOUT</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium tracking-wider">PROJECTS</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium tracking-wider">CONTACT</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="px-8 py-20 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fc8137230b4634424997bef63129279d1%2Fdb253aeeeaee4f37b17d308ae49ffb25?format=webp&width=800)'
            }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gray-800 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-500 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-wider">
                HEY, I'M CHAIRIL RAHMAN
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                A Result-Oriented Web Developer building and managing Websites and Web
                <br />
                Applications that leads to the success of the overall product
              </p>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-black text-white px-12 py-6 text-lg font-semibold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
              >
                PROJECTS
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`px-8 py-20 bg-white transition-all duration-1000 ${
            visibleSections.has('about')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wider">ABOUT ME</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get to know me!</h3>

                {/* Profile Picture */}
                <div className="mb-8">
                  <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden shadow-sm bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8137230b4634424997bef63129279d1%2F55cd682db4964a6986257c9aa8831b90?format=webp&width=800"
                      alt="Chairil Rahman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                  </p>
                  <p>
                    I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                  </p>
                  <p>
                    I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                  </p>
                </div>
                <a href="mailto:chairilrahman24@gmail.com">
                  <Button
                    className="mt-8 bg-gray-900 hover:bg-black text-white px-8 py-3 font-semibold tracking-wider"
                  >
                    CONTACT
                  </Button>
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`px-8 py-20 bg-gray-50 transition-all duration-1000 ${
            visibleSections.has('projects')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wider">PROJECTS</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here you will find some of the personal and clients projects that I created with each project containing its own case study
              </p>
            </div>
            
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''} transition-all duration-1000 ${
                    visibleSections.has('projects')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: visibleSections.has('projects') ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </a>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gray-200 text-gray-700 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`px-8 py-20 bg-white transition-all duration-1000 ${
            visibleSections.has('contact')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wider">CONTACT</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <form
                action="mailto:chairilrahman24@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-black text-white py-4 text-lg font-semibold tracking-wider"
                >
                  SUBMIT
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 bg-gray-900 text-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 tracking-wider">CHAIRIL RAHMAN</h3>
                <p className="text-gray-400 leading-relaxed">
                  A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 tracking-wider">SOCIAL</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to Top Rocket */}
            <div className="flex justify-center mt-8">
              <div className="group relative">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  title="Back to Top"
                >
                  <Rocket className="w-8 h-8" />
                </button>
                {/* Flashing Text Below Icon */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Back to Top
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
              © Copyright 2024. Made by Chairil Rahman
            </div>
          </div>
        </footer>
      </div>

      {/* Collapsible Social Media Widget */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={() => setShowSocialIcons(!showSocialIcons)}
            className="w-12 h-12 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-black transition-all duration-300 hover:scale-110"
            title="Social Media"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${showSocialIcons ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>

          {/* Social Icons */}
          <div className={`absolute left-0 bottom-16 transition-all duration-300 ${showSocialIcons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                  title={social.label}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <a href="https://t.me/chairilrahman" target="_blank" rel="noopener noreferrer">
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200 flex items-center space-x-2 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700 pr-2">Chat with me 👋</span>
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
