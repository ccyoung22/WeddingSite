"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show loading or default state until client-side hydration
  if (!isClient) {
    return <div className={styles.main}>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      {isMobile ? (
        <div className={styles.mobileContainer}>
          {" "}
          <div className={styles.paperWrapper}>
            <img
              src={"/assets/MobileSchedule.webp"}
              alt="Paper Image"
              className={styles.paperImg}
            />
            <div className={styles.mobileContentDiv}>
              <div className={styles.lineDotDiv}>
                <div className={styles.dot}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>

                <div className={styles.line}></div>
              </div>

              <div className={styles.scheduleInfomration}>
                <div className={styles.dayGroup}>
                  <div className={styles.timeLabel}>Friday 19th June</div>

                  <h3 className={styles.eventTitle}>Casual Evening Drinks</h3>
                  <p className={styles.location}>Location to be confirmed</p>
                </div>
                <div className={styles.dayGroup}>
                  <div className={styles.timeLabel}>Saturday 20th June</div>

                  <h3 className={styles.eventTitle}>Wedding Day</h3>
                  <p className={styles.eventType}>
                    Wedding ceremony, Dinner and Drinks
                  </p>
                  <p className={styles.time}>4pm(ish) till late</p>
                </div>
                <div className={styles.dayGroup}>
                  <div className={styles.timeLabel}>Sunday 21st June</div>

                  <h3 className={styles.eventTitle}>Pool Party</h3>
                  <p className={styles.eventType}>
                    Pizza and beers by the pool
                  </p>
                  <p className={styles.time}>Midday onwards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            <div className={styles.lineDotDiv}>
              <div className={styles.dot}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>

              <div className={styles.line}></div>
            </div>

            <div className={styles.scheduleInfomration}>
              <div className={styles.dayGroup}>
                <div className={styles.timeLabel}>Friday 19th June</div>

                <h3 className={styles.eventTitle}>Casual Evening Drinks</h3>
                <p className={styles.location}>Location to be confirmed</p>
              </div>
              <div className={styles.dayGroup}>
                <div className={styles.timeLabel}>Saturday 20th June</div>

                <h3 className={styles.eventTitle}>Wedding Day</h3>
                <p className={styles.eventType}>
                  Wedding ceremony, Dinner and Drinks
                </p>
                <p className={styles.time}>4pm(ish) till late</p>
              </div>
              <div className={styles.dayGroup}>
                <div className={styles.timeLabel}>Sunday 21st June</div>

                <h3 className={styles.eventTitle}>Pool Party</h3>
                <p className={styles.eventType}>Pizza and beers by the pool</p>
                <p className={styles.time}>Midday onwards</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
