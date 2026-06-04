import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroMedia from "@/components/HeroMedia";
import CountUp from "@/components/CountUp";
import styles from "./page.module.css";

// Order agreed with client: Oil&Gas → Supplies → Maintenance → Logistics → Green → Cybersecurity
const DIVISIONS = [
  {
    name: "Oil & Gas",
    img: "/sections/oil-gas.jpg",
    desc: "Distribution of core equipment, pipes, pipelines and heat exchangers for oil fields and the wider industry. Based in Houston, Texas.",
  },
  {
    name: "Supplies",
    img: "/sections/supplies.jpg",
    desc: "An extension of your procurement team. Outsourcing and just-in-time supply for any industrial or commercial requirement.",
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
    name: "Green",
    img: "/sections/green.jpg",
    desc: "Sustainable solutions that help partners reduce environmental impact and carbon footprint through technologies that work.",
  },
  {
    name: "Cybersecurity",
    img: "/sections/cybersecurity.jpg",
    desc: "Industrial cybersecurity through our Vizenet line — OT/IT convergence, tank security, Grid Code compliance and electrical studies.",
  },
];

// Logos we currently have on file
const CLIENTS = [
  { name: "PEMEX", src: "/sections/Clients/PEMEX_Logo.svg", scale: 1 },
  { name: "CFE", src: "/sections/Clients/CFE.svg", scale: 1.55 },
  { name: "Ecopetrol", src: "/sections/Clients/Ecopetrol_wordmark.svg", scale: 0.95 },
  { name: "Petroecuador", src: "/sections/Clients/petroecuador.svg", scale: 1.1 },
  { name: "Vopak", src: "/sections/Clients/Vopak.svg", scale: 1 },
  { name: "Wintershall", src: "/sections/Clients/wintershall.svg", scale: 1.7 },
];

// Additional clients named in the company profile (logos pending from client)
const MORE_CLIENTS = [
  "TOTAL",
  "Indian Oil",
  "Exxon Mobil",
  "Petroamazonas",
  "ABB Panama",
  "AES Panama",
  "Bauer",
  "Trevi",
  "Puma Marine",
];

// Brands SALCICO represents / distributes
const BRANDS = [
  {
    name: "NEWAY Valves",
    scope: "Latin America distributor",
    desc: "Cast, forged, ball, butterfly and cryogenic valves for onshore, subsea, LNG, refining, power and nuclear applications.",
  },
  {
    name: "FF Coyard",
    scope: "Worldwide distributor",
    desc: "Specialists in special standards and alloys, backed by agreements with world-recognized manufacturers.",
  },
];

const INDUSTRIES = [
  "Oil & Gas",
  "Power Gen",
  "Marine",
  "Renewable",
  "Piping",
  "Construction",
  "Refineries",
  "Railways",
  "Nuclear",
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
                SALCICO Group ·{" "}
                <span className={styles.eyebrowRed}>Oil &amp; Gas</span>
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
                Panama, helping public and private clients build better value and
                operational efficiency through just-in-time solutions and
                outsourcing schemes.
              </p>
              <p className="lead">
                With more than a decade in the market, we bring purchasing and
                service expertise to every engagement — a differentiated mix of
                products, services and solutions built around your specific
                requirements. We are specialists in special standards and
                alloys, with agreements with world-recognized manufacturers.
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
              Six integrated business units, one accountable partner across the
              industrial value chain.
            </p>
          </Reveal>

          <Reveal className={styles.divGrid}>
            {DIVISIONS.map((d, i) => (
              <a
                key={d.name}
                href={`/contact?division=${encodeURIComponent(d.name)}`}
                className={styles.divCard}
              >
                <div
                  className={styles.divCardImg}
                  style={{ backgroundImage: `url(${d.img})` }}
                  aria-hidden="true"
                />
                <span className={styles.divNum}>0{i + 1}</span>
                <p className={styles.divDesc}>{d.desc}</p>
                <h3 className={styles.divName}>
                  {d.name}
                  <span className={styles.divArrow} aria-hidden="true">→</span>
                </h3>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* BRANDS / REPRESENTATIONS */}
      <section id="brands" className="section">
        <div className="container">
          <Reveal className={styles.divHead}>
            <h2 className="h2">Brands we represent</h2>
            <p className="lead" style={{ maxWidth: "40ch" }}>
              Official distribution backed by agreements with world-recognized
              manufacturers in special standards and alloys.
            </p>
          </Reveal>
          <Reveal className={styles.brandGrid}>
            {BRANDS.map((b) => (
              <div key={b.name} className={styles.brandCard}>
                <span className={styles.brandScope}>{b.scope}</span>
                <h3 className={styles.brandName}>{b.name}</h3>
                <p className={styles.divDesc}>{b.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section">
        <div className="container">
          <Reveal className={styles.industries}>
            <div className={styles.industriesHead}>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                Sectors we serve
              </p>
              <h2 className="h2">Built for heavy industry.</h2>
            </div>
            <ul className={styles.industryList}>
              {INDUSTRIES.map((ind) => (
                <li key={ind} className={styles.industryItem}>
                  {ind}
                </li>
              ))}
            </ul>
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
            <p className={styles.moreClients}>
              Also trusted by{" "}
              {MORE_CLIENTS.map((c, i) => (
                <span key={c}>
                  <span className={styles.moreClient}>{c}</span>
                  {i < MORE_CLIENTS.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* BROCHURES */}
      <section id="brochures" className="section">
        <div className="container">
          <Reveal className={styles.divHead}>
            <h2 className="h2">Brochures &amp; downloads</h2>
            <p className="lead" style={{ maxWidth: "40ch" }}>
              Company profile and product material — download or request the
              latest version from our team.
            </p>
          </Reveal>
          <Reveal className={styles.brochureGrid}>
            <a
              className={styles.brochureCard}
              href="/brochures/salcico-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.brochureType}>PDF · Company profile</span>
              <h3 className={styles.brochureName}>
                SALCICO Group — Corporate Presentation
              </h3>
              <span className={styles.brochureDl}>Download →</span>
            </a>
            <div className={`${styles.brochureCard} ${styles.brochureSoon}`}>
              <span className={styles.brochureType}>Coming soon</span>
              <h3 className={styles.brochureName}>
                Product catalogs &amp; datasheets
              </h3>
              <span className={styles.divDesc}>
                Division-specific brochures will be published here as they
                become available.
              </span>
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

      {/* FOOTER — compact, dark, recedes */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footRow}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-salcico.svg"
              alt="GRUPO SALCICO"
              className={styles.footLogo}
            />
            <nav className={styles.footNav}>
              <a href="/#about">About</a>
              <a href="/#divisions">Divisions</a>
              <a href="/#clients">Clients</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className={styles.footActions}>
              <a href="mailto:ventas@salcico.com">ventas@salcico.com</a>
              <a
                href="https://api.whatsapp.com/send?phone=18325740328"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footWa}
              >
                WhatsApp →
              </a>
            </div>
          </div>
          <div className={styles.footLegal}>
            <span>© {new Date().getFullYear()} GRUPO SALCICO</span>
            <span>Mexico City · Houston · Panama</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
