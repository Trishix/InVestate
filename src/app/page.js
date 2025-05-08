import Image from "next/image";
import styles from "./page.module.css"; 
import { properties, performanceData } from "./data/mockdata";

export default function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
  <a href="/">Home</a>
  <a href="/aboutus">About Us</a> 
  <a href="/services">Services</a> 
  <a href="/contactus">Contact Us</a>
</nav>


      <section className="hero">
        <h1>
          <span>Track. ROI.</span>
          <span>Manage. Assets.</span>
        </h1>
        <img
          src="/Assets/heroimg.jpg" 
          alt="Hero Image" 
          className="hero-image" 
          width={1200}
          height={600}
          priority
        />
      </section>

      <section className={styles.propertiesSection}>
        <div className={styles.sectionHeader}>
          <h2>Your Properties</h2>
        </div>
        
        <div className={styles.slideshow}>
          {properties.map((property) => {
            const performance = performanceData.find(p => p.propertyId === property.id);
            return (
              <div key={property.id} className={styles.slide}>
                <div className={styles.propertyImage}>
                  <img
                    src={property.imageUrl}
                    alt={property.name}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                </div>
                <div className={styles.propertyInfo}>
                  <h3>{property.name}</h3>
                  <p className={styles.address}>{property.address}</p>
                  <div className={styles.details} style={{color: "purple"}}>
                    <div className={styles.detailItem}>
                      <span>Current Value</span>
                      <span className={styles.value} style={{color: "purple"}}>₹{(property.currentValue / 10000000).toFixed(2)} Cr</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span style={{color: "green"}}>ROI</span>
                      <span className={styles.value} style={{color: "green"}}>{performance?.roi}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@investateapp.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Investate App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
