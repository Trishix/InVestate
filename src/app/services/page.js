import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <ul>
        <li>Property Performance Tracking</li>
        <li>ROI Calculation & Insights</li>
        <li>Asset Management Dashboard</li>
        <li>Real-Time Market Value Estimation</li>
      </ul>
    </div>
  );
}
