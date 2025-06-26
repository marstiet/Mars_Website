import React from "react";
import styles from "./Irc.module.css";
import IrcHeader from "./IrcHeader";
import IrcInfo from "./IrcInfo";
import IrcMissions from "./IrcMissions";
import IrcTrackRecord from "./IrcTrackRecord";
import IrcRoverSpecs from "./IrcRoverSpecs";
import IrcFooter from "./IrcFooter";

export const   Irc = ()=> {
  return (
    <section className={styles.irc}>
      <IrcHeader />
      <IrcInfo />
      <IrcMissions />
      <IrcTrackRecord />
      <IrcRoverSpecs />
    </section>
  );
}

