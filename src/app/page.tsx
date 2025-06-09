"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Terminal,
  BookOpen,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "JavaScript/TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 85, icon: Globe },
    { name: "Python", level: 88, icon: Terminal },
    { name: "Database Systems", level: 80, icon: Database },
    { name: "Data Structures & Algorithms", level: 92, icon: BookOpen },
    { name: "Machine Learning", level: 75, icon: Award },
  ];

  const projects = [
    {
      title: "Smart Campus Navigation",
      description:
        "AI-powered navigation system for Chulalongkorn University campus using React and machine learning algorithms.",
      tech: ["React", "Python", "TensorFlow", "MongoDB"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting application using blockchain technology for student elections.",
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Modern chat app with real-time messaging, file sharing, and video calls using WebRTC.",
      tech: ["Socket.io", "React", "Node.js", "WebRTC"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate parallax effect for background image

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Dynamic Background with profile.jpg */}
      <div className="dynamic-background"></div>

      {/* Existing Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-orb-1"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-orb-2"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-lg border-b border-purple-500/20"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PT
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Parama Tourtriphop
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Computer Science Student
          </p>
          <p className="text-lg text-purple-300 mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            Chulalongkorn University, Bangkok
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions through code.
            Specializing in web development, AI/ML, and building scalable
            applications that make a difference.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a dedicated Computer Science student at Chulalongkorn
                University, one of Thailand&apos;s most prestigious
                institutions. My journey in technology began with curiosity and
                has evolved into a passion for solving complex problems through
                elegant code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently focusing on full-stack development, machine learning,
                and data structures & algorithms. I believe in writing clean,
                efficient code and am always eager to learn new technologies and
                methodologies.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <Calendar className="w-6 h-6 text-purple-400 mb-2" />
                  <h3 className="font-semibold mb-1">Academic Year</h3>
                  <p className="text-gray-400">3rd Year Student</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <BookOpen className="w-6 h-6 text-purple-400 mb-2" />
                  <h3 className="font-semibold mb-1">GPA</h3>
                  <p className="text-gray-400">3.75/4.00</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Bachelor of Engineering
                      </h4>
                      <p className="text-purple-300">Computer Science</p>
                      <p className="text-gray-400">Chulalongkorn University</p>
                      <p className="text-sm text-gray-500">
                        2022 - 2026 (Expected)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-purple-400 mr-3 group-hover:text-pink-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>

                  <div className="relative">
                    <div className="bg-slate-700 rounded-full h-3 mb-2">
                      <div
                        className={`bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out skill-${skill.level}`}
                      ></div>
                    </div>
                    <span className="text-sm text-purple-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I&apos;m always interested in new opportunities, collaborations, and
            connecting with fellow developers. Whether you have a project in
            mind or just want to chat about technology, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:parama.t@student.chula.ac.th"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <Mail className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">parama2549@gmail.com</p>
            </a>

            <a
              href="https://github.com/NaiPondMa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <Github className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">@NaiPondMa</p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=mL1IcxIUd5Y"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <Linkedin className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Parama Tourtriphop</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start a conversation?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I&apos;m currently seeking internship opportunities and exciting
              projects to work on during my studies.
            </p>
            <a
              href="mailto:parama.t@student.chula.ac.th"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Parama Tourtriphop. Built with Next.js and passion for clean
            code.
          </p>
        </div>
      </footer>
    </div>
  );
}
