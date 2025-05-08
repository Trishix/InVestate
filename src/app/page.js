import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <div className="home-page">
      
      <nav className="navbar">
        {/* Logo and Navigation Links */}
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
      </nav>

      <section className="hero">
        {/* Main Heading, Subheading, Call-to-Action Button */}
        <h1>
    <span>Track. ROI.</span>
    <span>Manage. Assets.</span>
        </h1>
        <img src="./Assets/heroimg.jpg" alt="Hero Image" className="hero-image" />
      </section>
      <footer className="footer">
        {/* Footer Links like About, Terms, Privacy */}
      </footer>
    </div>
  );
}
