import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/services">Services</a>
        <a href="/contactus">Contact Us</a>
      </nav>

      <section className={styles.content}>
        <h1>About Us</h1>
        <p>
          Investate is revolutionizing the way investors track and manage real estate assets. 
          With smart ROI insights, real-time data, and intelligent dashboards, we help clients 
          grow smarter and faster.
        </p>
        <p>
          Founded in 2023, our team consists of experts in proptech, finance, and data analytics. 
          We're committed to simplifying real estate investing for the modern investor.
        </p>
      </section>
    </div>
  );
}
