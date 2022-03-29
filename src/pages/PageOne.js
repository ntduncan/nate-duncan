import React, { useEffect } from "react";
import styles from "./PageOne.module.css";
import Header from "./header/Header";
import WaveBlock from "./WaveBlock/WaveBlock";

export default function PageOne() {
  return (
    <div className={[styles.pageOne].join(" ")}>
      <div className={styles["title-block"]}>
        <h1 className={styles["titel-block__title"]}>Nate Duncan</h1>
        <p className={styles["titel-block__subtitle"]}>Web Developer</p>
      </div>
      <Header />
    </div>
  );
}
