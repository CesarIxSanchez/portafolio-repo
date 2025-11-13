import React, { useState } from 'react';
import './index.css';
import './App.css';

const portfolioData = {
  name: 'César Antonio Ix Sánchez',
  title: "Estudiante de Licenciatura como Ingeniero en Tecnología de Software",
  github: 'https://github.com/CesarIxSanchez',
  phone: '9811812998',
  email: 'al066271@uacam.mx'
};

const projectsData = [
  {
    title: 'Sitio de e-Commerce accesible',
    description: 'Sitio web de un e-Commerce accesible de venta de aguas con ARIA labels.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://cesarixsanchez.github.io/aguas-web/',
    repoUrl: 'https://github.com/CesarIxSanchez/aguas-web'
  },
  {
    title: 'Mi Red Social',
    description: 'Sitio web de una red social ficticia.',
    tags: ['HTML', 'CSS'],
    demoUrl: 'https://cesarixsanchez.github.io/red-lifeshare/',
    repoUrl: 'https://github.com/CesarIxSanchez/red-lifeshare'
  },
  {
    title: 'Cheat sheet',
    description: 'Sitio web de un temario con las principales etiquetas de HTML.',
    tags: ['HTML', 'CSS'],
    demoUrl: 'https://cesarixsanchez.github.io/Cheat-Sheet-HTML-cesar/',
    repoUrl: 'https://github.com/CesarIxSanchez/Cheat-Sheet-HTML-cesar'
  },
  {
    title: 'Escapa del ICE',
    description: 'Sitio web de un juego web con música y diferentes dificultades.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://cesarixsanchez.github.io/escape-ice/',
    repoUrl: 'https://github.com/CesarIxSanchez/escape-ice'
  },
  {
    title: 'Formulario CRUD',
    description: 'Sitio web que implementa las cuatro operaciones CRUD usando un API.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://cesarixsanchez.github.io/formulario-crud/',
    repoUrl: 'https://github.com/CesarIxSanchez/formulario-crud'
  },
  {
    title: 'Juego Tic-Tac-Toe',
    description: 'Sitio web de un juego Tic-Tac-Toe.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://cesarixsanchez.github.io/tic-tac-toe-repo/',
    repoUrl: 'https://github.com/CesarIxSanchez/tic-tac-toe-repo'
  },
];

const IconGitHub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87c0-1.09-.9-2.08-2-2.3-1.12-.22-2.22-.6-3-1.2C9.06 11.08 8 9.96 8 8.5C8 6.67 9.34 5.5 11 5.5s3 1.17 3 3c0 1.46-.06 2.58-1 3.2-.88.6-1.88 1-3 1.2-1.1.22-2 .8-2 2v3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const IconLink = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => (
    setIsMenuOpen(!isMenuOpen)
  );

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="#home" className='nav__logo'>
          {portfolioData.name.split(' ')[0]}<span className='nav__logo-dot'>.</span>
        </a>
        {/* Menú de escritorio */}
        <ul className='nav__list--desktop'>
          <li><a href="#home" className='nav__link active'>Inicio</a></li>
          <li><a href="#projects" className="nav__link">Proyectos</a></li>
          <li><a href="#contact" className="nav__link">Contacto</a></li>
        </ul>

        <button className='nav__menu-button' onClick={toggleMenu} aria-label='Navegación'>
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>

        {/* Menú móvil */}
        <div className={`nav__menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          <ul className='nav__list--mobile'>
            <li><a href="#home" className="nav__link" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#projects" className="nav__link" onClick={toggleMenu}>Proyectos</a></li>
            <li><a href="#contact" className="nav__link" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id='home' className='hero container section'>
      <h1 className='hero__title'>
        Hola, soy <span>{portfolioData.name.split(' ')[0]}</span>
      </h1>
      <h2 className='hero__subtitle'>{portfolioData.title}</h2>
      <div className='hero__cta-group'>
        <a href="#projects" className='button button--primary'>Ver Proyectos</a>
        <a href={portfolioData.github} target='_blank' rel='noopener noreferrer' className='button button--secondary'>
          Ver GitHub
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <h3 className='project-card__title'>{project.title}</h3>
      <p className='project-card__description'>{project.description}</p>
      <div className='project-card__tags'>
        {project.tags.map((tag) => (
          <span key={tag} className='project-card__tag'>{tag}</span>
        ))}
      </div>
      <div className='project-card__links'>
        <a href={project.demoUrl} target='_blank' rel='noopener noreferrer' className='project-card__links'>
          <IconLink /> Ver demo
        </a>
        <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className='project-card__link'>
          <IconGitHub /> Ver código
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id='projects' className='projects container section'>
      <h2 className='section__title'>Proyectos</h2>
      <div className='projects__grid'>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id='contact' className='contact container section'>
      <h2 className='section__title'>Contacto</h2>
      <p className='contact__subtitle'>
        ¡Hablemos! Contáctame a través de cualquiera de estos medios.
      </p>
      <div className='contact__links'>
        <a href={`mailto:${portfolioData.email}`} className='contact__link'>Email</a>
        <a href={portfolioData.github} target='_blank' rel='noopener noreferrer' className='contact__link'>GitHub</a>
        <a href={`tel:${portfolioData.phone}`} className='contact__link'>Teléfono</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer_text'>
        © {new Date().getFullYear()} {portfolioData.name}.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}