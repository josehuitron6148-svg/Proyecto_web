import EyeMark from "./eye-mark";

const features = [
  {
    number: "01",
    icon: "✳",
    title: "Diseño con intención",
    text: "Una identidad digital hecha a tu medida. Sin plantillas genéricas, con personalidad propia y enfocada en lo que hace única a tu marca.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Lista para crecer",
    text: "Una experiencia fluida en móvil, tablet y escritorio; optimizada para buscadores y preparada para acompañar tu próximo paso.",
  },
  {
    number: "03",
    icon: "◌",
    title: "Tecnología que trabaja",
    text: "Carga rápida, navegación intuitiva e integraciones útiles que convierten las visitas en conversaciones y las ideas en oportunidades.",
  },
  {
    number: "04",
    icon: "⌘",
    title: "Siempre en tu equipo",
    text: "Te acompañamos después del lanzamiento con soporte cercano, mejoras continuas y respuestas claras, sin tecnicismos.",
  },
];

const steps = [
  ["01", "Te escuchamos", "Nos cuentas tu idea, tu negocio y hacia dónde quieres llevarlo."],
  ["02", "Le damos forma", "Creamos una dirección visual y una estructura pensada para tus clientes."],
  ["03", "Lo hacemos realidad", "Diseñamos, desarrollamos y revisamos cada detalle contigo."],
  ["04", "Salimos al mundo", "Publicamos tu sitio y seguimos cerca para que crezca contigo."],
];

const faqs = [
  {
    question: "¿Cuánto tarda en estar listo mi sitio web?",
    answer:
      "Cada proyecto es distinto. Una página informativa suele tomar entre 3 y 5 semanas; una tienda en línea o un proyecto con integraciones puede requerir más tiempo. Definimos un calendario claro desde el inicio.",
  },
  {
    question: "¿Puedo actualizar mi página después?",
    answer:
      "Sí. Construimos sitios fáciles de mantener y te explicamos cómo hacer los cambios habituales. También podemos apoyarte con actualizaciones y mantenimiento cuando lo necesites.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Cuéntanos un poco de tu proyecto por correo. Agendaremos una charla breve para conocer tus objetivos y recomendarte el mejor camino, sin compromiso.",
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
    <main id="contenido">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Shoppe Web, inicio">
          <EyeMark />
          <span>shoppe<span className="brand-light">web</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Lo que hacemos</a>
          <a href="#proceso">Nuestro proceso</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="header-cta" href="#contacto">
          Hablemos <ArrowIcon />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            <a href="#servicios">Lo que hacemos</a>
            <a href="#proceso">Nuestro proceso</a>
            <a href="#preguntas">Preguntas</a>
            <a href="#contacto">Hablemos</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> DISEÑO WEB PARA IDEAS CON VISIÓN</span>
          <h1>Tu intuición<br />ya sabe <span>por dónde.</span></h1>
          <p>
            Creamos sitios web que se sienten como tú y llevan tu negocio hacia
            donde quieres ir. Diseño a medida, estrategia clara y tecnología
            lista para crecer.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">
              Cuéntanos tu idea <ArrowIcon />
            </a>
            <a className="text-link" href="#servicios">Conoce lo que hacemos</a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>V</span><span>M</span><span>A</span>
            </div>
            <span>Ideas con intención.<br /><strong>Resultados que se notan.</strong></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Vista previa de un sitio web diseñado por Shoppe Web">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-star">✳</div>
          <div className="browser-card">
            <div className="browser-top">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="browser-address">tumarca.com</div>
              <span className="browser-menu">···</span>
            </div>
            <div className="browser-page">
              <div className="preview-nav"><b>FORMA<span>.</span></b><div><i /><i /><i /></div></div>
              <div className="preview-content">
                <div className="preview-text">
                  <span>OBJETOS PARA SENTIR</span>
                  <strong>Menos ruido.<br />Más <em>esencia.</em></strong>
                  <div className="preview-button">DESCUBRE LA COLECCIÓN <span>↗</span></div>
                </div>
                <div className="preview-image">
                  <div className="vase vase-back" />
                  <div className="vase vase-front" />
                  <div className="sun-shape" />
                </div>
              </div>
              <div className="preview-bottom"><span>HECHO CON INTENCIÓN</span><span>01 — 04</span></div>
            </div>
          </div>
          <div className="floating-note note-top"><span>✦</span> Con personalidad</div>
          <div className="floating-note note-bottom"><span className="note-check">✓</span> Se adapta a cada pantalla</div>
          <div className="art-caption">UNA PRESENCIA DIGITAL CON INTENCIÓN <span>01 / 03</span></div>
        </div>
        <a className="scroll-hint" href="#servicios"><span /> DESLIZA PARA EXPLORAR</a>
      </section>

      <section className="intro section-pad" id="servicios">
        <div className="section-label"><span>01</span> LO QUE HACEMOS</div>
        <div className="intro-heading">
          <h2>Una buena web no solo se ve bien.<br /><span>Se siente correcta.</span></h2>
          <p>Tu negocio merece más que una plantilla. Merece una experiencia digital pensada para conectar con las personas correctas.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top"><span>{feature.number}</span><span className="feature-icon">{feature.icon}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-orb" aria-hidden="true"><EyeMark /></div>
        <span className="manifesto-label">NO ES SOLO UNA PÁGINA WEB</span>
        <h2>Es el primer <em>sí</em><br />a lo que sigue.</h2>
        <p>Una marca con claridad abre puertas. Hagamos que la tuya sea imposible de ignorar.</p>
        <a className="button button-light" href="#contacto">Quiero dar el siguiente paso <ArrowIcon /></a>
        <span className="manifesto-star star-a">✳</span><span className="manifesto-star star-b">✦</span>
      </section>

      <section className="process section-pad" id="proceso">
        <div className="process-heading">
          <div className="section-label"><span>02</span> CÓMO LO HACEMOS</div>
          <h2>De esa primera idea<br />a <span>algo extraordinario.</span></h2>
          <p>Un proceso cercano, colaborativo y sin sorpresas. Tú pones la visión; nosotros, el camino para hacerla realidad.</p>
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

      <section className="testimonial">
        <span className="quote-mark">“</span>
        <p className="quote-text">Entendieron exactamente lo que queríamos transmitir. Hoy nuestra página sí se siente como nosotros.</p>
        <div className="quote-author"><span className="author-avatar">L</span><span><strong>Laura M.</strong><small>Emprendedora creativa</small></span></div>
        <div className="quote-decoration" aria-hidden="true">✳</div>
      </section>

      <section className="faq section-pad" id="preguntas">
        <div className="faq-intro">
          <div className="section-label"><span>03</span> PREGUNTAS FRECUENTES</div>
          <h2>¿Te ronda<br />alguna <span>duda?</span></h2>
          <p>Estamos aquí para ayudarte a verlo más claro.</p>
          <a className="text-link" href="mailto:hola@shoppeweb.mx">Escríbenos directamente <ArrowIcon /></a>
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
        <div className="contact-spark">✳</div>
        <span className="manifesto-label">TU SIGUIENTE GRAN IDEA EMPIEZA AQUÍ</span>
        <h2>¿Y si lo hacemos<br /><em>realidad?</em></h2>
        <p>Cuéntanos qué imaginas. Nos encantará escucharte.</p>
        <a className="button button-dark" href="mailto:hola@shoppeweb.mx?subject=Quiero%20crear%20mi%20sitio%20web">
          Empecemos a platicar <ArrowIcon />
        </a>
        <span className="contact-email">HOLA@SHOPPEWEB.MX</span>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio" aria-label="Shoppe Web, volver al inicio">
          <EyeMark />
          <span>shoppe<span className="brand-light">web</span></span>
        </a>
        <span className="footer-note">Diseñado con intención en México.</span>
        <span className="footer-copy">© 2026 SHOPPE WEB</span>
        <a className="back-top" href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
      <p>Proyecto final de la materia Ingeniería de software - José Carlos Isaí Huitrón Barrón - 225361482</p>
    </main>
  );
}
