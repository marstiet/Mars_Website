import React from "react";
import styles from "./IrcInfo.module.css";


function IrcInfo() {
  return (
    <section className={styles.infoSection}>
        <div className={styles.headerContainer}>    
        <h1 className={styles.headerTitle}>ABOUT ISDC</h1>
        
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>ISDC AT A GLANCE</h2>
            <p className={styles.columnText}>
              The International Space Drone Challenge (ISDC) is a global engineering
               competition organized by the Space Robotics Society (SPROS). It challenges
                university students to design, build, and operate astronaut-assistive space
                 drones through mission-based tasks conducted in a simulated Martian environment.
                  By integrating aerospace systems, electronics, control, communication, and mission
                   planning, ISDC provides a hands-on, real-world platform that fosters innovation, 
                   technical excellence, and teamwork, preparing students for future challenges in space robotics.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>VISION</h2>
            <p className={styles.columnText}>
              ISDC aims to inspire the next generation of space engineers by advancing the role
               of drones in future planetary exploration. Built around realistic Mars-mission scenarios,
                the challenge promotes safe, innovative, and interdisciplinary solutions for post-settlement 
                exploration. With growing global participation each year, ISDC continues to empower students
                 to push boundaries, collaborate across disciplines, and shape the future of space technology.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>600+</span>
          <span className={styles.statLabel}>STUDENTS</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>20+</span>
          <span className={styles.statLabel}>TEAMS</span>
        </div>
        
      </div>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}><br></br><br></br>ABOUT IRC</h1>
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
