import LeafMark from "./eye-mark";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Sitios web a medida",
    text: "Una identidad digital que refleja quién eres y convierte tus ideas en una experiencia clara, atractiva y fácil de recorrer.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Tiendas en línea",
    text: "Catálogos, pagos y una compra sencilla en cualquier pantalla. Todo preparado para que vender se sienta natural.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Cuidado y evolución",
    text: "Acompañamiento, mejoras y soporte cercano para que tu sitio siga creciendo contigo después de su lanzamiento.",
  },
];

const projects = [
  {
    category: "IDENTIDAD DIGITAL · GASTRONOMÍA",
    name: "Raíz & Tierra",
    description: "Una experiencia cálida para una cocina nacida del origen.",
    className: "project-art-root",
    initials: "R",
    label: "COCINA DE TEMPORADA",
    headline: <>Del origen<br />a tu mesa.</>,
    action: "DESCUBRE EL MENÚ",
  },
  {
    category: "TIENDA EN LÍNEA · BIENESTAR",
    name: "Botánica Viva",
    description: "Una tienda serena que pone el cuidado cotidiano en primer plano.",
    className: "project-art-botanical",
    initials: "bv.",
    label: "RITUALES NATURALES",
    headline: <>Un respiro<br />para volver a ti.</>,
    action: "EXPLORA LA TIENDA",
  },
  {
    category: "SITIO WEB · ARQUITECTURA",
    name: "Casa Umbral",
    description: "Espacio, luz y materia convertidos en una presencia digital.",
    className: "project-art-home",
    initials: "UMBRAL",
    label: "ARQUITECTURA CONSCIENTE",
    headline: <>Habitar<br />con intención.</>,
    action: "VER PROYECTOS",
  },
];

const steps = [
  ["01", "Nos conocemos", "Hablamos de tu idea, tus objetivos y las personas a quienes quieres llegar."],
  ["02", "Trazamos el camino", "Definimos el contenido, la estructura y una dirección visual para tu proyecto."],
  ["03", "Diseñamos y construimos", "Desarrollamos tu sitio contigo, revisando cada detalle antes de publicarlo."],
  ["04", "Lanzamos y acompañamos", "Tu web sale al mundo y seguimos cerca para cuidarla y hacerla crecer."],
];

const faqs = [
  {
    question: "¿Qué tipo de páginas web pueden crear?",
    answer:
      "Diseñamos sitios informativos, páginas para profesionales y negocios, portafolios y tiendas en línea. La propuesta se adapta a tus objetivos y a las necesidades de tu proyecto.",
  },
  {
    question: "¿Cuánto tiempo toma el proyecto?",
    answer:
      "Depende del alcance y del contenido disponible. Después de conocer tu idea, acordamos etapas y fechas realistas antes de comenzar.",
  },
  {
    question: "¿Podré actualizar mi página?",
    answer:
      "Sí. Te orientamos para que puedas gestionar los cambios habituales y, si lo prefieres, también podemos ayudarte con el mantenimiento y las mejoras.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Escríbenos con una breve descripción de tu proyecto. Coordinaremos una primera conversación para entender lo que necesitas y definir los siguientes pasos.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Selva Studio, inicio">
          <LeafMark />
          <span>selva<span className="brand-light">studio</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#proceso">Proceso</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="header-cta" href="#contacto">
          Hablemos <ArrowIcon />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Proceso</a>
            <a href="#preguntas">Preguntas</a>
            <a href="#contacto">Hablemos</a>
          </nav>
        </details>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> DISEÑO WEB A TU MEDIDA</span>
            <h1>Tu negocio<br />también puede<br /><span>echar raíces</span><i>.</i></h1>
            <p>
              Diseñamos y creamos páginas web a la medida de tu proyecto.
              Experiencias digitales claras, auténticas y listas para crecer contigo.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contacto">
                Cuéntanos tu idea <ArrowIcon />
              </a>
              <a className="text-link" href="#proyectos">Explora nuestro trabajo <span>↓</span></a>
            </div>
            <div className="hero-notes">
              <span><i>✳</i> Diseño personalizado</span>
              <span><i>✳</i> Hecho para cada pantalla</span>
            </div>
          </div>

          <div className="hero-scene" aria-label="Vista previa de una página web para una marca de naturaleza">
            <div className="scene-sun" />
            <div className="scene-leaf leaf-one" />
            <div className="scene-leaf leaf-two" />
            <div className="scene-leaf leaf-three" />
            <div className="scene-leaf leaf-four" />
            <div className="scene-leaf leaf-five" />
            <div className="scene-stem stem-one" />
            <div className="scene-stem stem-two" />
            <div className="scene-stem stem-three" />
            <div className="hero-browser">
              <div className="browser-bar">
                <span className="browser-lights"><i /><i /><i /></span>
                <span>estudiobotanico.mx</span>
                <span className="browser-menu">···</span>
              </div>
              <div className="browser-preview">
                <div className="preview-nav"><b>MONTE<span>.</span></b><span>INICIO　 ESTUDIO　 CONTACTO</span></div>
                <div className="preview-hero">
                  <span>UN ESTUDIO QUE CRECE CONTIGO</span>
                  <strong>Hecho para<br /><em>florecer.</em></strong>
                  <p>Diseño con raíces, ideas con futuro.</p>
                  <span className="preview-link">CONOCE EL ESTUDIO　↗</span>
                </div>
                <div className="preview-plant"><span /><i /><b /></div>
                <div className="preview-foot"><span>DISEÑO CONSCIENTE</span><span>01 — 04</span></div>
              </div>
            </div>
            <div className="scene-tag tag-top"><span>✦</span> Un sitio, hecho para ti</div>
            <div className="scene-tag tag-bottom"><span>↗</span> Listo para crecer</div>
            <div className="scene-caption">UNA PRESENCIA DIGITAL CON RAÍCES <span>SELVA STUDIO · 2026</span></div>
          </div>
          <a className="scroll-hint" href="#servicios"><span /> DESLIZA PARA EXPLORAR</a>
        </section>

        <section className="services section-pad" id="servicios">
          <div className="section-label"><span>01</span> LO QUE HACEMOS</div>
          <div className="section-heading">
            <h2>Una web que se siente<br /><em>como tu marca.</em></h2>
            <p>Sin fórmulas prefabricadas. Creamos el espacio digital que tu proyecto necesita para conectar con las personas correctas.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-rule" />
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="proyectos">
          <div className="section-label"><span>02</span> IDEAS EN MOVIMIENTO</div>
          <div className="projects-heading">
            <h2>Diseñada para ti.<br /><em>Lista para el mundo.</em></h2>
            <p>Cada proyecto empieza con una historia distinta. El resultado también debería serlo.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`project-art ${project.className}`}>
                  <div className="mini-site">
                    <div className="mini-nav"><b>{project.initials}</b><span>ESTUDIO　 NOSOTROS　 CONTACTO</span><i>↗</i></div>
                    <div className="mini-content">
                      <span>{project.label}</span>
                      <strong>{project.headline}</strong>
                      <i>{project.action}　↗</i>
                    </div>
                    <div className="art-shape" aria-hidden="true"><span /><i /><b /></div>
                    <span className="mini-index">01 — 03</span>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="project-meta"><span>{project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div>
              </article>
            ))}
          </div>
          <p className="projects-note">MUESTRAS CONCEPTUALES · CADA DISEÑO SE CREA DESDE CERO PARA CADA CLIENTE</p>
        </section>

        <section className="manifesto">
          <div className="manifesto-leaves" aria-hidden="true"><span /><i /><b /></div>
          <span className="manifesto-label">NO HAY DOS PROYECTOS IGUALES</span>
          <h2>Tu visión tiene<br />un lugar <em>propio.</em></h2>
          <p>Hagamos que tu presencia en internet se parezca a lo que imaginas y funcione para lo que necesitas.</p>
          <a className="button button-outline" href="#contacto">Hagamos espacio para tu idea <ArrowIcon /></a>
          <span className="manifesto-mark">✳</span>
        </section>

        <section className="process section-pad" id="proceso">
          <div className="process-heading">
            <div className="section-label"><span>03</span> CÓMO LO HACEMOS</div>
            <h2>De la primera charla<br />a <em>tu nueva web.</em></h2>
            <p>Un camino claro y colaborativo, donde sabes qué sigue y tienes voz en cada etapa.</p>
            <a className="process-link" href="#contacto">¿Tienes una idea? Hablemos <ArrowIcon /></a>
          </div>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <article className="step" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="step-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-band">
          <span className="quote-leaf" aria-hidden="true">✳</span>
          <p>“Un buen sitio web no solo muestra lo que haces.<br /><em>Ayuda a imaginar lo que viene.</em>”</p>
          <span className="quote-caption">UNA IDEA QUE GUÍA CADA PROYECTO</span>
        </section>

        <section className="faq section-pad" id="preguntas">
          <div className="faq-intro">
            <div className="section-label"><span>04</span> PREGUNTAS FRECUENTES</div>
            <h2>Hablemos<br />sin <em>enredos.</em></h2>
            <p>Lo importante es que tengas claridad antes de comenzar.</p>
            <a className="text-link" href="mailto:hola@selvastudio.mx">¿Tienes otra pregunta? Escríbenos <ArrowIcon /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-orb" aria-hidden="true">✳</div>
          <span className="manifesto-label">TU IDEA PUEDE CRECER AQUÍ</span>
          <h2>¿Qué te gustaría<br /><em>crear?</em></h2>
          <p>Cuéntanos qué tienes en mente. Empezamos por escucharte.</p>
          <a className="button button-lime" href="mailto:hola@selvastudio.mx?subject=Quiero%20crear%20mi%20sitio%20web">
            Conversemos sobre tu proyecto <ArrowIcon />
          </a>
          <span className="contact-email">HOLA@SELVASTUDIO.MX</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio" aria-label="Selva Studio, volver al inicio">
          <LeafMark />
          <span>selva<span className="brand-light">studio</span></span>
        </a>
        <span className="footer-note">Diseño digital con raíces. Hecho para crecer.</span>
        <span className="footer-copy">© 2026 SELVA STUDIO</span>
        <a className="back-top" href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
    </>
  );
}
