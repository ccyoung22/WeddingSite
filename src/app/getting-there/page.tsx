"use client";
import styles from "./page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// const villaDonna = "/assets/VillaDonnaCamilla.jpg";
// const villa2 = "/assets/villaImg2.jpg";
// const villa3 = "/assets/villaImg3.png";
const stamp = "/assets/newStamp.png";

export default function Page() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  const rotate2 = useTransform(scrollYProgress, [0, 1], ["0deg", "720deg"]);

  return (
    <div className={styles.mainContainer} ref={targetRef}>
      <div className={styles.titleContainer}>
        <div className={styles.stampContainer}>
          <motion.img
            src={stamp}
            className={styles.stampImg}
            style={{ rotate }} // Apply the rotation
          />
        </div>
        <div className={styles.cherubDiv}>
          <img src={"/assets/brownChrub.png"} className={styles.cherubImg} />
        </div>

        <h1 className={styles.pageTitle}>Getting There</h1>
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.rightContainer}>
          <div className={styles.mainRecommendation}>
            <p className={styles.recommendationText}>
              We recommend flying into <strong>Pisa Airport</strong> for the
              most convenient access to our wedding venue.
            </p>
          </div>
          <div className={styles.mobileStampDiv}>
            <motion.img
              src={stamp}
              className={styles.mobileStampImg}
              style={{ rotate: rotate2 }} // Apply the rotation
            />
          </div>
          <div className={styles.airportSection}>
            <h2 className={styles.sectionTitle}>From Pisa Airport</h2>
            <div className={styles.sectionDivider}></div>

            <p className={styles.sectionIntro}>
              The wedding venue is a 30-minute drive from Pisa Airport.
              {"You'll"} need to arrange your own transport from the airport to
              your accommodation (see the <em>Where To Stay</em> page for more
              details).
            </p>

            <div className={styles.transportOptions}>
              <h3 className={styles.optionTitle}>Hotel Shuttle</h3>
              <p className={styles.optionDescription}>
                Contact your hotel directly to ask about airport transfer
                services
              </p>

              <h3 className={styles.optionTitle}>Car Rental</h3>
              <p className={styles.optionDescription}>
                Pick up a rental car at the airport - this is{" "}
                <strong>highly recommended</strong> given the remote location
                and will give you flexibility for exploring the beautiful
                surrounding area
              </p>
            </div>
          </div>
          <div className={styles.mobileStampDiv}>
            <motion.img
              src={stamp}
              className={styles.mobileStampImg}
              style={{ rotate: rotate2 }} // Apply the rotation
            />
          </div>

          <div className={styles.weekendSection}>
            <h2 className={styles.sectionTitle2}>Wedding Weekend Transport</h2>
            <div className={styles.sectionDivider}></div>

            <div className={styles.weekendContent}>
              <div className={styles.weekendHighlight}>
                <h3 className={styles.optionTitle}>Saturday & Sunday</h3>
                <p className={styles.optionDescription}>
                  Pre-arranged buses will transport guests between
                  accommodations and the wedding venue on both days. Detailed
                  timing information will be shared closer to the wedding date.
                </p>
              </div>

              <div className={styles.drivingNote}>
                <h3 className={styles.optionTitle}>Driving Option</h3>
                <p className={styles.optionDescription}>
                  Prefer to drive yourself? {"There's"} plenty of parking
                  available at the venue.
                </p>
              </div>
            </div>

            <div className={`${styles.section} ${styles.fridaySection}`}>
              <h2 className={styles.optionTitle}>Friday Night Drinks</h2>
              <div className={styles.sectionDivider}></div>

              <div className={styles.fridayContent}>
                <p className={styles.optionDescription}>
                  {"We're"} planning casual drinks on Friday evening (location
                  TBD - either in Pisa or near the venue) for anyone {"who'd"}{" "}
                  like to join us. This is a relaxed, optional event that we{" "}
                  {"won't"} pre-arranged transport for. Please check with your
                  accommodation about options to get to Pisa, or drive if you
                  have a rental car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
