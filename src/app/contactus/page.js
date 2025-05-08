import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Have questions or need help? We’re here to assist you.</p>
      <div className={styles.contactDetails}>
        <p><strong>Email:</strong> support@investateapp.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Business Street, New Delhi, India</p>
      </div>
    </div>
  );
}
