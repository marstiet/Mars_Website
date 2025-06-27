import React from "react";
import styles from "./IrcTrackRecord.module.css";

function IrcTrackRecord() {
  return (
    <section className={styles.trackRecordSection}>

    <header className={styles.sectionHeader}>
        <div className={styles.headerStartLine} />
        <h2 className={styles.headerTitle}>Our Track Record</h2>
        <div className={styles.headerEndLine} />
      </header>

      {/* Awards + Journey Row */}
<div className={styles.awardJourneyRow}>
<div className={styles.journeySection1}>
    <h4 className={styles.journeyTitle}>OUR VALUES</h4>
    <ul className={styles.journeyTimeline}>
      <li className={styles.journeyItem}>
        <span className={styles.journeyYear}>Innovation</span>
        <p>Pushing boundries with every rover.</p>
      </li>
      <li className={styles.journeyItem}>
        <span className={styles.journeyYear}>Teamwork</span>
        <p>Every system works in sync -- always.</p>
      </li>
      <li className={styles.journeyItem}>
        <span className={styles.journeyYear}>Resilience</span>
        <p>Failures fuel our future success. </p>
      </li>
      <li className={styles.journeyItem}>
        <span className={styles.journeyYear}>Precision</span>
        <p>Every nut, bolt, and line of code drives the spirit of exploration.</p>
      </li>
    </ul>
  </div>
  <article className={styles.awardCard}>
    <img
      src="/firstRUP.JPG"
      className={styles.awardImage1}
      alt="1st Runner Up award"
    />
    <h2 className={styles.awardTitle1}>1'st Runner Up</h2>
  </article>

  <div className={styles.journeySection2}>
    <h4 className={styles.journeyTitle2}>OUR JOURNEY</h4>
    <ul className={styles.journeyTimeline2}>
      <li className={styles.journeyItem2}>
        <span className={styles.journeyYear2}>2022</span>
        <p>Conceptualization & first prototype built.</p>
      </li>
      <li className={styles.journeyItem2}>
        <span className={styles.journeyYear2}>2023</span>
        <p>Debuted at IRC with complete working rover.</p>
      </li>
      <li className={styles.journeyItem2}>
        <span className={styles.journeyYear2}>2024</span>
        <p>Implemented autonomy, achieved global top 10.</p>
      </li>
      <li className={styles.journeyItem2}>
        <span className={styles.journeyYear2}>2025</span>
        <p>Implemented terrain navigation, modular arm.</p>
      </li>
    </ul>
  </div>
</div>


      <div className={styles.awardsContainer}>
        <div className={styles.awardColumn}>
          <article className={styles.awardCard}>
            <img
              src="/groupprevirc.jpg"
              className={styles.awardImage}
              alt="Emerging team of the year award"
            />
            <h2 className={styles.awardTitle1}>Finalist'24</h2>
          </article>
        </div>
        <div className={styles.awardColumn}>
          <article className={styles.awardCard}>
            <img
              src="/EmergingTeam.jpg"
              className={styles.awardImage}
              alt="Finalist award"
            />
            <h2 className={styles.awardTitle1}>Emerging Team of the Year '23</h2>
          </article>
        </div>
      </div>
  
      
    </section>
  );
}

export default IrcTrackRecord;
