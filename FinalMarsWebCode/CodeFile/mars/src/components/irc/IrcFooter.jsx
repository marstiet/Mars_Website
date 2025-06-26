import React from "react";
import styles from "./IrcFooter.module.css";

function IrcFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.diagonalStrip1}></div>
      <div className={styles.diagonalStrip2}></div>
      <div className={styles.footerContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73c773aa5ea4ca17613cae28bf63ad33b8855236?placeholderIfAbsent=true&apiKey=bcf7fc84fa744c8c842bdc968c5aeb09"
          className={styles.societyLogo}
          alt="Mechatronics & Robotics Society logo"
        />
        <h2 className={styles.societyName}>Mechatronics & Robotics Society</h2>
        <p className={styles.societyDescription}>
          Join our growing community of robotics enthusiasts.
        </p>
        <button className={styles.joinButton}>JOIN NOW</button>
      </div>
    </footer>
    
  );
}

export default IrcFooter;
