import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarRange,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react'
import './App.css'

const navItems = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Formación', href: '#education' },
  { label: 'Herramientas', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

const education = [
  {
    title: 'Licenciatura en Educación Primaria',
    institution: 'Universidad Martha Christlieb',
    date: '2021 - 2025',
    status: 'Egresada (título en trámite)',
    details: [
      'Formación enfocada en la enseñanza de educación primaria.',
      'Desarrollo de competencias pedagógicas, didácticas y de acompañamiento infantil.',
      'Enfoque en atención a la diversidad, creatividad y aprendizaje significativo.',
    ],
  },
  {
    title: 'Metodologías de enseñanza y aprendizaje',
    institution: 'Práctica docente y servicio social',
    date: '2023 - 2025',
    status: 'Aplicadas en aula',
    details: [
      'NEM, ABP, aprendizaje basado en indagación (STEAM) y aprendizaje y servicio.',
      'Diseño de materiales didácticos para distintos ritmos y estilos de aprendizaje.',
      'Evaluación formativa, planeación y atención a niñas y niños de primaria.',
    ],
  },
]

const softwareTools = [
  {
    name: 'Microsoft Word',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.5h7.3L18.5 7v12.5A1.5 1.5 0 0 1 17 21H7A1.5 1.5 0 0 1 5.5 19.5v-14A1.5 1.5 0 0 1 7 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.2 11.4h7.6M8.2 14.5h7.6M8.2 17.6h5.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.7 8.4h3.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Excel',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.5h7.3L18.5 7v12.5A1.5 1.5 0 0 1 17 21H7A1.5 1.5 0 0 1 5.5 19.5v-14A1.5 1.5 0 0 1 7 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.2 9.8h7.6M8.2 13.2h7.6M8.2 16.6h7.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 8v9M13 8v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Google Classroom',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 6.8A2.3 2.3 0 0 1 6.8 4.5h10.4a2.3 2.3 0 0 1 2.3 2.3v8.4a2.3 2.3 0 0 1-2.3 2.3H6.8a2.3 2.3 0 0 1-2.3-2.3V6.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.1 10.1a2.1 2.1 0 1 1 4.2 0v.8a2.1 2.1 0 0 1-4.2 0v-.8Zm-2.1 5.4c0-1.7 1.5-3.1 3.3-3.1h3.4c1.8 0 3.3 1.4 3.3 3.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Canva',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8c2.8 0 5 2.1 5 4.8v1.2c0 2.2-1.4 4.1-3.5 4.8l-.9.3v5.1h-1.2v-5.1l-.9-.3A4.5 4.5 0 0 1 7 9.8V8.6c0-2.7 2.2-4.8 5-4.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="9.3" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Genially',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8 15.2 9l5.8 2.8-5.8 2.7L12 20.2 8.8 14.5 3 11.8 8.8 9 12 3.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Educaplay',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="6.5" width="12" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.2 9.8h5.6M9.2 12h5.6M9.2 14.2h3.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17.2" cy="8.5" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Zoom',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="6.5" width="11.5" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 9.2 20 7v10l-5-2.2v-5.6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Google Meet',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="6.5" width="11.5" height="11" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 9.2 20 7v10l-5-2.2v-5.6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="9" cy="12" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: 'Sistema LAM',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 8.3A2.8 2.8 0 0 1 8.3 5.5h7.4a2.8 2.8 0 0 1 2.8 2.8v7.4a2.8 2.8 0 0 1-2.8 2.8H8.3a2.8 2.8 0 0 1-2.8-2.8V8.3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 8.8h7M8.5 12h7M8.5 15.2h4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

const strengths = [
  'NEM',
  'ABP',
  'STEAM',
  'Aprendizaje y servicio',
  'Evaluación',
  'Atención a la diversidad',
  'Comunicación con familias',
  'Organización escolar',
]

const experience = [
  {
    period: 'Agosto 2023 - julio 2025',
    school: 'Escuela Primaria Manuel M. Herrera',
    location: 'Turno matutino · Código 30EPR0487H',
    position: 'Experiencia Docente en Formación (Servicio Social)',
    responsibilities: [
      'Responsable de 3° grado durante todo el ciclo escolar.',
      'Planeación basada en metodologías NEM, ABP, aprendizaje basado en indagación (STEAM) y aprendizaje y servicio.',
      'Manejo de campos formativos, aplicación y diseño de evaluaciones.',
      'Diseño y adaptación de materiales didácticos para distintos estilos y ritmos de aprendizaje.',
      'Comunicación constante con madres, padres y tutores, además de participación en consejos técnicos y actividades escolares.',
    ],
  },
  {
    period: 'Ciclo escolar 2025 - 2026',
    school: 'LOGOS COLLEGE',
    location: 'Maestra titular multigrado preescolar',
    position: 'Docente titular',
    responsibilities: [
      'Trabajo como maestra titular multigrado preescolar en 2° y 3°.',
      'Atención educativa, organización de actividades y trabajo administrativo en la institución.',
      'Conocimiento y manejo del sistema educativo LAM.',
      'Organización de eventos escolares y acompañamiento al desarrollo de niñas y niños.',
    ],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Inicio">
            <span className="brand-mark">SN</span>
            <div>
              <strong>SALMA NAOMI</strong>
              <small>Educación Primaria</small>
            </div>
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="button button-primary header-button">
              Contacto
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={16} /> Docente de primaria
              </span>
              <h1>SALMA NAOMI</h1>
              <p className="subtitle">Maestra egresada de la Licenciatura en Educación Primaria</p>
              <p className="lead">
                Me apasiona acompañar el crecimiento de niñas y niños con empatía, creatividad
                y una enseñanza cercana que favorezca el aprendizaje, la confianza y el bienestar.
              </p>

              <div className="cta-row">
                <a href="#contact" className="button button-primary">
                  Contáctame <ArrowRight size={18} />
                </a>
                <a href="#experience" className="button button-secondary">
                  Mi experiencia
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <strong>2021 - 2025</strong>
                  <span>Licenciatura</span>
                </div>
                <div className="stat-card">
                  <strong>3° grado</strong>
                  <span>Responsable</span>
                </div>
                <div className="stat-card">
                  <strong>+2 ciclos</strong>
                  <span>Experiencia docente</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-card">
                <div className="avatar-wrapper">
                  <div className="avatar">
                    <img src="/selfie.jpg" alt="Salma Naomi" />
                  </div>
                </div>

                <div className="mini-badges">
                  <span>Creatividad</span>
                  <span>Empatía</span>
                  <span>Liderazgo</span>
                </div>

                <div className="profile-card-data">
                  <div>
                    <span className="label">Universidad</span>
                    <strong>Martha Christlieb</strong>
                  </div>
                  <div>
                    <span className="label">Estatus</span>
                    <strong>Egresada</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-soft">Sobre mí</span>
              <h2>Educación con calidez, creatividad y acompañamiento real.</h2>
            </div>

            <div className="about-grid">
              <article className="card about-story">
                <p>
                  Soy Salma Naomi Santiago Zacarias, egresada de la Licenciatura en Educación Primaria con gran
                  vocación por enseñar y acompañar a niñas y niños en su proceso de aprendizaje.
                </p>
                <p>
                  Durante mi experiencia docente he trabajado con responsabilidad, creatividad y
                  empatía para crear ambientes de aprendizaje seguros, dinámicos y significativos.
                  Me interesa promover el desarrollo integral de cada alumno, apoyando su curiosidad,
                  autonomía y confianza.
                </p>
                <p>
                  Mi práctica docente se enfoca en la innovación pedagógica, la comunicación con
                  familias y la organización de experiencias escolares que fortalezcan la comunidad.
                </p>
              </article>

              <aside className="card about-points">
                <ul>
                  <li>
                    <HeartHandshake size={18} /> Responsable, creativa y empática
                  </li>
                  <li>
                    <BookOpenCheck size={18} /> Aprendizaje significativo y cercano
                  </li>
                  <li>
                    <Users size={18} /> Comunicación con madres, padres y tutores
                  </li>
                  <li>
                    <CheckCircle2 size={18} /> Organización de actividades y liderazgo escolar
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-soft">Formación académica</span>
              <h2>Preparación sólida para la enseñanza primaria.</h2>
            </div>

            <div className="card-grid">
              {education.map((item) => (
                <article key={item.title} className="card info-card">
                  <div className="card-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div className="card-body">
                    <span className="meta">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p className="institution">{item.institution}</p>
                    <span className="status">{item.status}</span>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-soft">Herramientas y enfoque</span>
              <h2>Recursos digitales, metodologías y habilidades pedagógicas.</h2>
            </div>

            <div className="skills-layout">
              <div className="card software-card">
                <h3>Herramientas de software</h3>
                <div className="software-grid">
                  {softwareTools.map(({ name, icon }) => (
                    <div key={name} className="software-item">
                      <div className="software-icon">{icon}</div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card method-card">
                <h3>Enfoques pedagógicos</h3>
                <ul>
                  {strengths.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow eyebrow-soft">Experiencia laboral</span>
              <h2>Trayectoria docente con enfoque en acompañamiento y excelencia.</h2>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article key={`${job.school}-${job.period}`} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true"></div>

                  <div className="card timeline-card">
                    <div className="timeline-header">
                      <div>
                        <p className="meta">{job.period}</p>
                        <h3>{job.position}</h3>
                      </div>
                      <span className="pill">{job.location}</span>
                    </div>

                    <p className="institution">{job.school}</p>

                    <ul>
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="card contact-card">
              <div className="contact-copy">
                <span className="eyebrow eyebrow-soft">Contacto</span>
                <h2>Estoy abierta a nuevas oportunidades educativas.</h2>
                <p>
                  Me gusta formar parte de escuelas y organizaciones que valoren la educación con
                  humanidad, creatividad y excelencia académica.
                </p>
              </div>

              <div className="contact-details">
                <a href="tel:2721232935">
                  <Phone size={18} /> 272 123 29 35
                </a>
                <a href="mailto:naomi_0610@hotmail.com">
                  <Mail size={18} /> naomi_0610@hotmail.com
                </a>
                <span>
                  <MapPin size={18} /> Educación primaria y acompañamiento escolar
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2025 SALMA NAOMI • Maestra de educación primaria</p>
          <div className="footer-icons">
            <GraduationCap size={18} />
            <BookOpenCheck size={18} />
            <BriefcaseBusiness size={18} />
            <CalendarRange size={18} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
