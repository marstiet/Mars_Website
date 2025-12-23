import React from "react";
import styles from "./IrcHeader.module.css";


function IrcHeader() {
  return (
    <header className={styles.header}>
      {/* Top-right badge */}
      <img src="/spaceroboticssociety_logo1.png" alt="Badge" className={styles.badge} />

      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            <div className={styles.word1}>
              <span className={styles.highlightedLetter}>Sp</span>
              <span className={styles.regularText}>ace</span>
            </div>
            <div className={styles.word2}>
              <span className={styles.highlightedLetter}>Ro</span>
              <span className={styles.regularText}>botics</span>
            </div>
            <div className={styles.word3}>
              <span className={styles.highlightedLetter}>S</span>
              <span className={styles.regularText}>ociety</span>
            </div>
          </h1>
        </div>
      </section>
      
      <section className={styles.aboutSection}>
        <div className={styles.orangeBar}></div>
      </section>
    </header>
  );
}

export default IrcHeader;
