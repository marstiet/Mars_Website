"use client";
import React from "react";
import styles from "./IrcMissions.module.css";

function IrcMissions() {
  return (
    <section className={styles.missionsSection}>
      <img
        src="/Backgroundimg.svg"
        className={styles.backgroundImage}
        alt="Missions background"
      />

      <div className={styles.zigzagBackground}></div>

      <header className={styles.sectionHeader}>
        <div className={styles.headerLine} />
        <div className={styles.headerTitleContainer}>
          <h2 className={styles.headerTitle}>missions</h2>
          <div className={styles.headerEndLine} />
        </div>
      </header>

      <article className={styles.missionCard1}>
        <div className={styles.missionContent}>
          <div className={styles.missionTextColumn}>
            <div className={styles.missionText}>
              <h2>Astrobiology Expedition (ABEx)</h2>
              <p>
              <h2> Objective: </h2>Identify and characterize sites for signs of extant
                and extinct life.
              </p>
              <h2>Tasks:</h2>
              <ul>
                <li>Collect soil samples from at least 10 cm depth.</li>
                <li>Analyze Martian biosphere data using rover instruments.</li>
                <li>
                  Document each site with a panorama, showing cardinal
                  directions, scale, GPS and elevation.
                </li>
                <li>
                  Analyze sub-surface temperature, humidity, pH and atmospheric
                  pressure in designated site.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.missionImageColumn}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/472fbea1906092dda3dd10d6253be9579e5df2f9?placeholderIfAbsent=true&apiKey=bcf7fc84fa744c8c842bdc968c5aeb09"
              className={styles.missionImage}
              alt="Astrobiology Expedition"
            />
          </div>
        </div>
      </article>

      <article className={styles.missionCard2}>
        <div className={styles.missionContent}>
          <div className={styles.missionImageColumn}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1bb0ac0c3da7fcd517b24f2fca9a2d041434d6?placeholderIfAbsent=true&apiKey=bcf7fc84fa744c8c842bdc968c5aeb09"
              className={styles.missionImage}
              alt="Autonomous Expedition"
            />
          </div>
          <div className={styles.missionTextColumn}>
            <div className={styles.missionText}>
              <h2>Autonomous Expedition (AutEx)</h2>
              <p>
                <h2>Objective: </h2> Navigate rugged terrain autonomously between markers.
              </p>
              <h2>Tasks:</h2>
              <ul>
                <li>
                  Detect arrow signs, pause for 10 seconds, and navigate to an
                  orange cone.
                </li>
                <li>Document markers' GPS coordinates and directions.</li>
                <li>Compile a site map using collected data.</li>
              </ul>
              <p>
                Key Rule: Operate fully autonomously without base station
                commands.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.missionCard3}>
        <div className={styles.missionContent}>
          <div className={styles.missionTextColumn}>
            <div className={styles.missionText}>
              <h2>Reconnaissance and Delivery Operation (RDO)</h2>
              <p>
                <h2>Objective: </h2>Locate, retrieve, and deliver objects within 500
                meters of the base station.
              </p>
              <h2>Tasks:</h2>
              <ul>
                <li>
                  Reconnaissance (10 min): Locate objects, record GPS
                  coordinates, and store one object.
                </li>
                <li>
                  Delivery (20 min): Retrieve and deliver objects (up to 5 kg)
                  to designated GPS locations.
                </li>
              </ul>
              <p>Scoring: Based on accuracy and proximity to targets.</p>
            </div>
          </div>
          <div className={styles.missionImageColumn}>
            <img
              src="/RDO.jpg"
              className={styles.missionImage}
              alt="Reconnaissance and Delivery Operation"
            />
          </div>
        </div>
      </article>

      <article className={styles.missionCard4}>
        <div className={styles.missionContent}>
          <div className={styles.missionImageColumn}>
            <img
              src="/IDMO.jpg"
              className={styles.missionImage}
              alt="Instrument Deployment and Maintenance Operation"
            />
          </div>
          <div className={styles.missionTextColumn}>
            <div className={styles.missionText}>
              <h2>Instrument Deployment and Maintenance Operation (IDMO)</h2>
              <p>
               <h2>Objective: </h2> Perform precise maintenance and deployment using the
                rover's robotic arm.
              </p>
              <p>Tasks:</p>
              <ul>
                <li>
                  Maintenance: Transport a cache, open drawers, press buttons,
                  flip switches, and connect plugs.
                </li>
                <li>
                  Deployment: Position cache components precisely and relay
                  codes.
                </li>
              </ul>
              <p>
                Specifications: Panel height up to 1.5 m, requiring accuracy.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default IrcMissions;
