"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className={styles.main}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={styles.imageDiv}
      >
        <img
          src={"/assets/ScheduleFolder.webp"}
          alt="Folder Image"
          className={styles.folderImg}
        />

        <div className={styles.contentDiv}>
          <div className={styles.container}>
            <div className={styles.scheduleItem}>
              <div className={styles.timeline}>
                <div className={styles.timeMarker}>
                  <div className={styles.dot}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.timeLabel}>
                  Friday
                  <br />
                  19th June
                </div>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Casual Evening Drinks</h3>
                <p className={styles.location}>*Location to be confirmed</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.timeline}>
                <div className={styles.timeMarker}>
                  <div className={styles.dot}></div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.timeLabel}>
                  Saturday
                  <br />
                  20th June
                </div>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>The Big Day</h3>
                <p className={styles.eventType}>
                  Wedding ceremony, Dinner and Drinks
                </p>
                <p className={styles.time}>4pm(ish) till late</p>
              </div>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.timeline}>
                <div className={styles.timeMarker}>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.timeLabel}>
                  Sunday
                  <br />
                  21st June
                </div>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Pool Party</h3>
                <p className={styles.eventType}>Pizza and beers by the pool</p>
                <p className={styles.time}>Midday onwards</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
