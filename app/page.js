import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroMedia from "@/components/HeroMedia";
import CountUp from "@/components/CountUp";
import styles from "./page.module.css";

const DIVISIONS = [
  {
    name: "Oil & Gas",
    img: "/sections/oil-gas.jpg",
    desc: "Distribution of core equipment, pipes, pipelines and heat exchangers for oil fields and the wider industry. Based in Houston, Texas.",
  },
  {
    name: "Maintenance",
    img: "/sections/maintenance.jpg",
    desc: "General and specialized physical, structural and operational maintenance programs that keep facilities and equipment running.",
  },
  {
    name: "Logistics",
    img: "/sections/logistics.jpg",
    desc: "End-to-end logistics for purchasing departments — our own fleet or specialized courier, delivered exactly where you need it.",
  },
  {
    name: "Supplies",
    img: "/sections/supplies.jpg",
    desc: "An extension of your procurement team. Outsourcing and just-in-time supply for any industrial or commercial requirement.",
  },
  {
    name: "Green",
    img: "/sections/green.jpg",
    desc: "Sustainable solutions that help partners reduce environmental impact and carbon footprint through technologies that work.",
  },
];

const CLIENTS = [
  { name: "PEMEX", src: "/sections/Clients/PEMEX_Logo.svg", scale: 1 },
  { name: "CFE", src: "/sections/Clients/CFE.svg", scale: 1.55 },
  { name: "Ecopetrol", src: "/sections/Clients/Ecopetrol_wordmark.svg", scale: 0.95 },
  { name: "Petroecuador", src: "/sections/Clients/petroecuador.svg", scale: 1.1 },
  { name: "Vopak", src: "/sections/Clients/Vopak.svg", scale: 1 },
  { name: "Wintershall", src: "/sections/Clients/wintershall.svg", scale: 1.7 },
];

const STATS = [
  { num: "10+", lab: "Years in market" },
  { num: "3", lab: "Global offices" },
  { num: "5", lab: "Countries served" },
  { num: "68+", lab: "Partner companies" },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroFrame}>
            <HeroMedia />
            <div className={styles.heroInner}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>
                SALCICO Group · Oil &amp; Gas
              </p>
              <h1 className={`display ${styles.heroTitle}`}>
                <span className="line">Supply.</span>
                <span className="line">Maintain.</span>
                <span className="line">
                  Deliver<span className={styles.accentDot}>.</span>
                </span>
              </h1>
            </div>

            <a href="#divisions" className={styles.heroCard}>
              <div
                className={styles.heroCardImg}
                style={{ backgroundImage: "url(/sections/supplies.jpg)" }}
                aria-hidden="true"
              />
              <span className={styles.heroCardLabel}>What we do</span>
              <div className={styles.heroCardTitle}>
                <span>
                  Just-in-time
                  <br />
                  industrial supply
                </span>
                <span className={styles.heroCardArrow} aria-hidden="true">→</span>
              </div>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <Reveal className={styles.about}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                Salcico Group
              </p>
              <h2 className="h2">
                Operational
                <br />
                efficiency,
                <br />
                delivered.
              </h2>
            </div>
            <div className={styles.aboutBody}>
              <p className="lead">
                GRUPO SALCICO is a firm with offices in Mexico City, Houston and
                Tokyo, helping public and private clients build better value and
                operational efficiency through just-in-time solutions and
                outsourcing schemes.
              </p>
              <p className="lead">
                With more than a decade in the market, we bring purchasing and
                service expertise to every engagement — a differentiated mix of
                products, services and solutions built around your specific
                requirements.
              </p>
              <a href="#divisions" className="arrow-link">
                Explore our divisions →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" className="section">
        <div className="container">
          <Reveal className={styles.divHead}>
            <h2 className="h2">What we do</h2>
            <p className="lead" style={{ maxWidth: "38ch" }}>
              Five integrated business units, one accountable partner across the
              industrial value chain.
            </p>
          </Reveal>

          <Reveal className={styles.divGrid}>
            {DIVISIONS.map((d, i) => (
              <div key={d.name} className={styles.divCard}>
                <div
                  className={styles.divCardImg}
                  style={{ backgroundImage: `url(${d.img})` }}
                  aria-hidden="true"
                />
                <span className={styles.divNum}>
                  0{i + 1}
                </span>
                <p className={styles.divDesc}>{d.desc}</p>
                <h3 className={styles.divName}>{d.name}</h3>
              </div>
            ))}
            <div className={styles.divCard}>
              <span className={styles.divNum}>—</span>
              <p className={styles.divDesc}>
                Need something specific? Talk to us about a custom outsourcing
                or supply program.
              </p>
              <a href="/contact" className="arrow-link" style={{ marginTop: "auto" }}>
                Get a quote →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REACH / STATS */}
      <section id="reach" className="section">
        <div className="container">
          <Reveal className={styles.reach}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Anywhere in the world
            </p>
            <h2 className="h2">A global supply footprint.</h2>
            <div className={styles.statGrid}>
              {STATS.map((s) => (
                <div key={s.lab} className={styles.stat}>
                  <div className="num">
                    <CountUp value={s.num} />
                  </div>
                  <div className="lab">{s.lab}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section">
        <div className="container">
          <Reveal className={styles.clientsReveal}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Trusted across the Americas
            </p>
            <h2 className="h2">Our clients worldwide.</h2>
            <div className={styles.logoRow}>
              {CLIENTS.map((c) => (
                <div key={c.name} className={styles.logoCell}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt={c.name}
                    className={styles.logoImg}
                    style={{ transform: `scale(${c.scale})` }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="section">
        <div className="container">
          <Reveal className={styles.finalCta}>
            <div className={styles.finalInner}>
              <p className="eyebrow">Get in touch</p>
              <h2 className="h2">
                Let&apos;s build operational efficiency together.
              </h2>
              <p className="lead">
                Tell us what you need supplied, maintained or delivered. Our
                teams in Mexico, the U.S. and across LATAM typically reply within
                minutes.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a className="btn" href="/contact">
                  Get a Quote →
                </a>
                <a
                  className="arrow-link"
                  href="https://api.whatsapp.com/send?phone=18325740328"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <Reveal className={styles.footTop}>
            <div className={styles.footCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-salcico-dark.svg"
                alt="GRUPO SALCICO"
                className={styles.footLogo}
              />
              <p style={{ color: "#44525f", maxWidth: "34ch" }}>
                Industrial supply, maintenance and logistics for the oil &amp;
                gas sector — just in time.
              </p>
            </div>
            <div className={styles.footCol}>
              <h4>Offices</h4>
              <p>Mexico City, MX</p>
              <p>Houston, TX · USA</p>
              <p>Tokyo, JP</p>
            </div>
            <div className={styles.footCol}>
              <h4>Sales</h4>
              <a href="mailto:ventas@salcico.com">MX · ventas@salcico.com</a>
              <a href="mailto:ventaslatam@salcico.com">COL · ventaslatam@salcico.com</a>
              <a href="mailto:ventasecuador@salcico.com">EC · ventasecuador@salcico.com</a>
              <a href="mailto:ventaspanama@salcico.com">PAN · ventaspanama@salcico.com</a>
            </div>
            <div className={styles.footCol}>
              <h4>Phone</h4>
              <a href="tel:+525564142543">MX +52 556 4142 543</a>
              <a href="tel:+529984181510">MX +52 998 418 1510</a>
              <a href="tel:+12819742576">USA +1 281 974 2576</a>
            </div>
          </Reveal>
          <div className={styles.footLegal}>
            <span>© {new Date().getFullYear()} GRUPO SALCICO. All rights reserved.</span>
            <span>Mexico City · Houston · Tokyo</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
