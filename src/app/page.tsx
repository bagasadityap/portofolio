"use client";

import React from "react";
import { useEffect, useState} from "react";
import { Menu, X, Linkedin, Instagram, Github } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaDatabase, FaBootstrap, FaGitAlt} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiUnity} from "react-icons/si";

export default function Home() {
  const experiences = [
    {
      title: "Game Programmer at RAION COMMUNITY",
      date: "Januray 2023 – December 2023",
      description: "Become a programmer in some game development, such as platformers and educational games.",
    },
    {
      title: "Web Developer at CV. Technobit Indonesia (Intern)",
      date: "February 2024 – July 2024",
      description: "Develop and maintain web-based app with Laravel MVC and participate in agile development (stand-up meeting, sprint planning).",
    },
    {
      title: "Web Developer at CV. Technobit Indonesia (Part Time)",
      date: "August 2024 – December 2024",
      description: "Develop ERP system for company with Laravel.",
    },
    {
      title: "Graduated from Brawijaya University",
      date: "August 2025",
      description: "Bachelor's Degree in Informatics Engineering.",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [text, setText] = useState("");
  const code =`Hello, World! This is my portfolio page.\n\nMy name is Bagas Aditya Pramudia\nI'm a Full Stack Developer.\n`;

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(code.slice(0, index));
      index++;
      if (index > code.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="bg-slate-900 font-mono items-center justify-items-center min-h-screen w-full gap-10 px-5">
      <header
      className={`fixed top-0 left-0 w-full flex items-center sm:justify-end md:justify-center px-6 py-6 z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-800 backdrop-blur-sm shadow text-gray-300" : "bg-transparent"
      }`}
    >
      <nav className="hidden md:flex gap-10 text-2xl font-semibold">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
      </nav>

      <button
        className="md:hidden z-50 text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-slate-900 text-white p-8 pt-20 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-xl font-semibold">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#skill" onClick={() => setMenuOpen(false)}>Skill</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
        </nav>
      </div>
    </header>
      <main className="flex flex-col w-full min-h-screen justify-center items-center px-20">
        <div className="flex flex-row w-full justify-center items-center h-[80vh]">
          <div className="sm:w-[15%] md:w-[75%] flex flex-col items-center">
            <div className="md:min-w-2xl max-w-full bg-gray-800 rounded-xl shadow-lg font-mono text-green-400 overflow-auto">
              <div className="bg-gray-700 px-4 py-3 rounded-t-xl relative">
                <div className="flex space-x-3">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-6 text-lg text-white">
                  ~/portfolio
                </span>
              </div>
              <div className="p-4 text-lg text-start">
                <pre className="whitespace-pre-wrap">{text}</pre>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8">
          <a href="https://github.com/bagasadityap" target="_blank" rel="noopener noreferrer">
            <Github className="w-12 h-12 text-white hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/bagasadityapramudia" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-12 h-12 text-blue-600 hover:scale-110 transition-transform" />
          </a>

          <a href="https://instagram.com/bagasaditya_p_" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-12 h-12 text-pink-500 hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:bagasadit78@gmail.com" target="_blank" rel="noopener noreferrer">
            <FiMail className="w-12 h-12 text-pink-500 hover:scale-110 transition-transform" />
          </a>
        </div>
      </main>
      <section id="about" className="max-w-4xl mb-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">ABOUT ME</h1>
          <p className="text-lg text-justify">
            As a fresh graduate from Brawijaya University with a degree in Information Technology, I have gained hands-on experience in web development through academic projects and internships.I specialize in designing and building websites and web applications, with proficiency in front-end technologies such as HTML, CSS, and JavaScript, as well as back-end development using PHP and Laravel. I also have experience with version control systems like Git and database management using MySQL. Driven by a passion for continuous learning, I actively keep up with the latest trends and innovations in web development. With strong problem-solving and communication skills, I work well in collaborative environments and am committed to delivering effective, user-focused solutions.
          </p>
        </div>
      </section>
      <section id="experience" className="max-w-4xl mb-20">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">MY EXPERIENCE</h1>
          </div>
          <div className="relative border-l-5 border-green-600 pl-6 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-3 relative">
                <div className="w-4 h-4 bg-green-600 rounded-full absolute -left-2 top-2"></div>
                <h3 className="text-xl font-bold ml-5 mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-200">{exp.date}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skill" className="mb-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">MY SKILLS</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaHtml5 className="text-5xl mx-auto text-orange-600" />
              <h2 className="text-lg font-semibold mt-2">HTML</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaCss3Alt className="text-5xl mx-auto text-blue-500" />
              <h2 className="text-lg font-semibold mt-2">CSS</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaJs className="text-5xl mx-auto text-yellow-400" />
              <h2 className="text-lg font-semibold mt-2">JavaScript</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <SiTypescript className="text-5xl mx-auto text-blue-400" />
              <h2 className="text-lg font-semibold mt-2">TypeScript</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaDatabase className="text-5xl mx-auto text-teal-400" />
              <h2 className="text-lg font-semibold mt-2">MySQL</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaPhp className="text-5xl mx-auto text-indigo-400" />
              <h2 className="text-lg font-semibold mt-2">PHP</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaLaravel className="text-5xl mx-auto text-red-500" />
              <h2 className="text-lg font-semibold mt-2">Laravel</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <SiNextdotjs className="text-5xl mx-auto text-white" />
              <h2 className="text-lg font-semibold mt-2">Next.JS</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaBootstrap className="text-5xl mx-auto text-purple-600" />
              <h2 className="text-lg font-semibold mt-2">Bootstrap</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <SiTailwindcss className="text-5xl mx-auto text-sky-400" />
              <h2 className="text-lg font-semibold mt-2">Tailwind CSS</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <FaGitAlt className="text-5xl mx-auto text-sky-400" />
              <h2 className="text-lg font-semibold mt-2">GitHub</h2>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <SiUnity className="text-5xl mx-auto text-white" />
              <h2 className="text-lg font-semibold mt-2">Unity</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="project" className="max-w-4xl">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">MY PROJECTS EXPERIENCE</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Sistem Pemesanan Gedung dan Publikasi (2024-2025)</h2>
              <p className="text-gray-400">A website for managing building bookings and event publication for Goes to Campus event, with integrated VR technology for immersive building visualization.</p>
              <div className="flex items-center my-2">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Bootstrap</span>
              </div>
              <a href="https://sistempemesanangedung.bagasaditya.com" className="text-blue-400">Go to Project</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">$PASHER BEARY (2025)</h2>
              <p className="text-gray-400">A dedicated NFT project website for $PASHER BEARY, featuring digital collectibles, project details, and community links.</p>
              <div className="flex items-center my-2">
                <span className="bg-gray-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-white">Next.js</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Tailwind CSS</span>
              </div>
              <a href="https://phaserxrp.xyz" className="text-blue-400">Go to Project</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">SILPUSITRON (Sistem Informasi Layanan Publik Terintegrasi Secara Elektronik) (2024)</h2>
              <p className="text-gray-400">The integrated electronic public service system in Blitar City enables residents to submit certificate requests at the sub-district level and supports end-to-end processing up to the final document printing for official signing.</p>
              <div className="flex items-center my-2">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Bootstrap</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">API</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Web App Stock Control (2024)</h2>
              <p className="text-gray-400">A web application designed to manage and monitor stock levels in a warehouse, ensuring efficient inventory tracking and item availability.</p>
              <div className="flex items-center my-2">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Bootstrap</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Web Desa Ngadirejo (2023)</h2>
              <p className="text-gray-400">An official profile website that provides public service features for residents, such as submitting requests and accessing village information.</p>
              <div className="flex items-center my-2">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex items-center justify-center w-full max-w-xl mt-10">
        {/* <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Bagas Aditya Pramudia. All rights reserved.
        </p> */}
      </footer>
    </div>
  );
}
