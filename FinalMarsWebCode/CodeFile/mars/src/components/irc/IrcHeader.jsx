import React from "react";
import styles from "./IrcHeader.module.css";


function IrcHeader() {
  return (
    <header className={styles.header}>
      {/* Top-right badge */}
      <img src="/ICON.png" alt="Badge" className={styles.badge} />

      <section className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            <div className={styles.word1}>
              <span className={styles.highlightedLetter}>I</span>
              <span className={styles.regularText}>nternational</span>
            </div>
            <div className={styles.word2}>
              <span className={styles.highlightedLetter}>R</span>
              <span className={styles.regularText}>over</span>
            </div>
            <div className={styles.word3}>
              <span className={styles.highlightedLetter}>C</span>
              <span className={styles.regularText}>hallenge</span>
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
