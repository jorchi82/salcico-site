import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact — Get a Quote | SALCICO Group",
  description:
    "Request a quote from SALCICO Group. Just-in-time industrial supply, maintenance and logistics for oil & gas.",
};

export default function ContactPage() {
  return (
    <main id="top">
      <Navbar />

      <section className={styles.wrap}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: intro + direct channels */}
            <div className={styles.intro}>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                Get a quote
              </p>
              <h1 className="h2">
                Let&apos;s build operational efficiency together.
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                Tell us what you need supplied, maintained or delivered. Our
                teams in Mexico, the U.S. and across LATAM typically reply within
                minutes.
              </p>

              <div className={styles.channels}>
                <a
                  className="arrow-link"
                  href="https://api.whatsapp.com/send?phone=18325740328"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
                <div className={styles.channelMeta}>
                  <span>Mexico City · Houston · Tokyo</span>
                  <a href="mailto:ventas@salcico.com">ventas@salcico.com</a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.formCard}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
