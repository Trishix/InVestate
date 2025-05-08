import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/services">Services</a>
        <a href="/contactus">Contact Us</a>
      </nav>

      <section className={styles.content}>
        <h1>Contact Us</h1>
        <p>
          Have any questions or need support? We're here to assist you! Get in touch with us via
          email, phone, or visit our office.
        </p>
        <p>
          📧 <strong>Email:</strong> support@investateapp.com
        </p>
        <p>
          📞 <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          🏢 <strong>Address:</strong> 4th Floor, Investate HQ, Bengaluru, India
        </p>
      </section>
    </div>
  );
}
