import React from "react";
import styles from "./IrcInfo.module.css";


function IrcInfo() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>ABOUT IRC</h1>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>IRC AT A GLANCE</h2>
            <p className={styles.columnText}>
              The International Rover Challenge (IRC) empowers future innovators
              and engineers, offering a transformative platform for robotics and
              space engineering. By merging disciplines like electronics,
              mechanical design, software, and planetary sciences, IRC fosters
              technical expertise, resilience, and teamwork. Over the years, it
              has inspired countless students to dream big, push boundaries, and
              collaborate, driving innovation and shaping the future of space
              exploration.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>VISION</h2>
            <p className={styles.columnText}>
              IRC's journey reflects growth, ambition, and dedication. Since its
              inception, it has attracted diverse global teams, achieving
              milestones like record participation and innovative rover designs.
              Recognized by top institutions, IRC stands as a premier event for
              aspiring engineers, inspiring innovation and collaboration. With
              each edition, it empowers future pioneers to redefine
              possibilities in robotics and space technology.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>1000+</span>
          <span className={styles.statLabel}>STUDENTS</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>50+</span>
          <span className={styles.statLabel}>TEAMS</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>5+</span>
          <span className={styles.statLabel}>YEARS</span>
        </div>
      </div>
    </section>
  );
}

export default IrcInfo;
