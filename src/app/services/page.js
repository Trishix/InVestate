import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/services">Services</a>
        <a href="/contactus">Contact Us</a>
      </nav>

      <section className={styles.content}>
        <h1>Our Services</h1>
        <ul>
          <li>📈 Real-Time ROI Analysis</li>
          <li>🏠 Property Portfolio Management</li>
          <li>📊 Smart Investment Dashboards</li>
          <li>💬 Expert Consultation & Reports</li>
        </ul>
        <p>
          Whether you’re a new investor or a seasoned pro, our tools give you full control over 
          your investment journey.
        </p>
      </section>
    </div>
  );
}
