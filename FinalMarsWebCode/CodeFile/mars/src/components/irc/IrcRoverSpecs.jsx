import React from "react";
import styles from "./IrcRoverSpecs.module.css";

function IrcRoverSpecs() {
  return (
    <section className={styles.roverSpecsSection}>
      <header className={styles.sectionHeader}>
        <div className={styles.headerStartLine} />
        <h2 className={styles.headerTitle}>ROVER SPECIFICATIONS</h2>
        <div className={styles.headerEndLine} />
      </header>

<article className={styles.roverCard}>
  <div className={styles.roverContent}>
    <div className={styles.roverImageColumn}>
      <img
        src="/Alaknanda.jpg"
        className={styles.roverImage}
        alt="Alaknanda Rover"
      />
    </div>
    <div className={styles.roverSpecsColumn}>
      <div className={styles.roverSpecs}>
        <div className={styles.roverSpecsContent}>
          <h3 className={styles.roverNameb}>ALAKNANDA</h3>
          <ul className={styles.specsList}>
            <li>
              Custom PCB & BMS: Custom PCB and BMS optimized for industrial-grade arm and enhanced power efficiency.
            </li>
            <li>
              Robotic Arm (Industrial Aluminium): Full industrial-grade aluminium arm for heavy-duty, precise operations.
            </li>
            <li>
              Communication (MANTBOX Antenna): MANTBOX antenna with 110° coverage for extended range and reliability.
            </li>
            <li>
              Intel NUC i5: Intel NUC i5 processor for high-performance processing and autonomy.
            </li>
            <li>
              Rocker-Bogie Suspension: Rocker-bogie suspension for superior stability and terrain adaptability.
            </li>
            <li>
              Material & Build: Industrial-grade aluminium chassis for enhanced strength and durability.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</article>

<article className={styles.roverCard1}>
  <div className={styles.roverContent1}>
    <div className={styles.roverImageColumn1}>
      <img
        src="/Bhagirathi.jpg"
        className={styles.roverImage1}
        alt="Alaknanda Rover"
      />
    </div>
    <div className={styles.roverSpecsColumn1}>
      <div className={styles.roverSpecs}>
        <div className={styles.roverSpecsContent}>
          <h3 className={styles.roverNameb}>BHAGIRATHI</h3>
          <ul className={styles.specsList}>
            <li>
              Custom PCB & BMS: Custom PCB and BMS optimized for industrial-grade arm and enhanced power efficiency.
            </li>
            <li>
              Robotic Arm (Industrial Aluminium): Full industrial-grade aluminium arm for heavy-duty, precise operations.
            </li>
            <li>
              Communication (MANTBOX Antenna): MANTBOX antenna with 110° coverage for extended range and reliability.
            </li>
            <li>
              Intel NUC i5: Intel NUC i5 processor for high-performance processing and autonomy.
            </li>
            <li>
              Rocker-Bogie Suspension: Rocker-bogie suspension for superior stability and terrain adaptability.
            </li>
            <li>
              Material & Build: Industrial-grade aluminium chassis for enhanced strength and durability.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</article>


<article className={styles.roverCard}>
  <div className={styles.roverContent}>
    <div className={styles.roverImageColumn}>
      <img
        src="/Mandakini.jpg"
        className={styles.roverImage}
        alt="MANdakini rover"
      />
    </div>
    <div className={styles.roverSpecsColumn}>
      <div className={styles.roverSpecs}>
        <div className={styles.roverSpecsContent}>
          <h3 className={styles.roverNameb}>MANDAKINI</h3>
          <ul className={styles.specsList}>
            <li>
              Custom PCB & BMS: Tailored PCB and BMS for optimized power
              management and component integration.
            </li>
            <li>
              Robotic Arm (Aluminium): Locally manufactured full aluminium
              robotic arm for moderate tasks.
            </li>
            <li>
              Communication (TP-Link Antenna): 2.5 GHz TP-Link antenna with 60°
              coverage for short-range communication.
            </li>
            <li>
              Intel NUC i5: Intel NUC i5 processor for efficient data processing
              and control.
            </li>
            <li>
              Rocker-Bogie Suspension: Rocker-bogie system for stable mobility
              over rough terrain.
            </li>
            <li>
              Material & Build: Lightweight, durable aluminium chassis for easy
              local manufacturing and repair.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</article>


    </section>
  );
}

export default IrcRoverSpecs;
