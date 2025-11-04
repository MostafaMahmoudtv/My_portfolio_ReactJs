import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Thaat Company site",
    desc: "Developed a modern, responsive landing page for Zat Company using HTML, Tailwind CSS, and JavaScript, with smooth animations and an engaging user experience.",
    image: "assets/thaat.png",
    url: "https://thaat-three.vercel.app/",
  },
  {
    id: 2,
    title: "Radian company sa",
    desc: "Developed a modern, responsive Saudi website for Radian Company consisting of 66 pages, using HTML, Tailwind CSS, and JavaScript, featuring smooth animations and an engaging user experience.",
    image:
      "assets/radian.png",
    url: "https://radian-2-btiq.vercel.app/",
  },
 {
    id: 3,
    title: "Nahr elorobah site ",
    desc: "A puplished site for Nahelorobah company",
    image: "assets/نهر العروبة 1.png",
    url: "https://cna.sa",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    desc: "A complete e-commerce store built with HTML, CSS, JavaScript, and Firebase",
    image:
      "assets/Blue And White Modern Responsive Website Development Services Instagram Post.png",
    url: "https://www.youtube.com/watch?v=d-c087I97FU",
  },

  {
    id: 5,
    title: "Landing Page",
    desc: "A professional landing page designed with Bootstrap",
    image:
      "/assets/Blue And White Modern Responsive Website Development Services Instagram Post (1).png",
    url: "https://mostafamahmoudtv.github.io/landing_page_for_food_product/",
  },
  {
    id: 6,
    title: "Landing page ",
    desc: "build Landing page with pure html and css",
    image:
      "/assets/Blue And White Modern Responsive Website Development Services Instagram Post (7).png",
    url: "https://mostafamahmoudtv.github.io/landing-page-with-bootstrap/",
  },
  {
    id: 7,
    title: "Admin_dahboard ",
    desc: "build admin dashbaord with CRUD operaions React js",
    image: "/assets/main-admin-dashboard.png",
    url: "https://youtu.be/f4Xl_3xky_s?si=0dJOJjePRi9gvUtX",
  },
  {
    id: 8,
    title: "todo-list app ",
    desc: "build todo list app with React js",
    image: "/assets/todolist.png",
    url: "https://mostafamahmoudtv.github.io/todo_app_reactjs/",
  },
  
];
const testimonials = [
  {
    id: 1,
    screenshot: "/assets/1.png",
  },
  {
    id: 2,
    screenshot: "/assets/2.png",
  },
    {
    id: 2,
    screenshot: "/assets/feedback3.png",
  },
];

function App() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => (prev === 6 ? projects.length : 6));
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Moustafa</h1>

          {/* Hidden checkbox + label (hamburger button) */}
          <div className="md:hidden relative">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer block">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Mobile menu */}
            <div className="absolute right-0 top-10 w-40 bg-white shadow-md rounded-md py-4 px-4 hidden peer-checked:flex flex-col space-y-3 z-50">
              {["home", "about", "projects", "testimonials", "contact"].map(
                (section) => (
                  <Link
                    key={section}
                    to={section}
                    smooth={true}
                    duration={800}
                    className="cursor-pointer hover:text-indigo-600 capitalize"
                  >
                    {section}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {["home", "about", "projects", "testimonials", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={800}
                    className="cursor-pointer hover:text-indigo-600 capitalize"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-32 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-4"
      >
        <motion.img
          src="assets/profile.jpg"
          alt="profile"
          className="w-40 h-40 object-cover rounded-full border-white shadow-lg mb-6w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-cover rounded-full border-4 border-white shadow-lg mb-6"
        />
        <motion.h2
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Moustafa
        </motion.h2>
        <motion.p
          className="text-xl mb-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I'm a Frontend Developer with experience in creating fast, responsive,
          and modern websites using React, Tailwind CSS, Bootstrap, HTML, and
          CSS.
        </motion.p>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200 cursor-pointer"
        >
          View My Work
        </Link>
      </section>

      {/* About */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi, I'm Moustafa. I studied Computer Science for 4 years and built a
          strong foundation in web development. I'm a Frontend Developer
          specialized in building fast, responsive, and modern websites using
          React, Tailwind CSS, Bootstrap, HTML, and CSS. I am currently working
          as a freelancer on various platforms, delivering real-world projects
          and gaining continuous hands-on experience in building modern web
          interfaces.{" "}
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, visibleCount).map((p, index) => (
            <motion.div
              key={p.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <a href={p.url} className="text-indigo-600 font-semibold">
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              {visibleCount === 6 ? "Show More" : "Show Less"}
            </button>
          </div>
        )}
      </section>
      <section id="testimonials" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client feedback
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="w-full sm:w-[48%] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={t.screenshot}
                alt={`Screenshot of ${t.name}`}
                className="w-full h-64 object-contain bg-gray-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center gap-10 text-5xl">
          <a
            href="https://github.com/MostafaMahmoudtv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mostafa-mahmoud-tv/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/201008962251"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default App;
