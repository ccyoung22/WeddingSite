import styles from "./AllTheInfo.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AllTheInfo() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 0.5], ["200%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "80%"]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], ["0%", "90%"]);
  // const x4 = useTransform(scrollYProgress, [0.5, 1], ["10%", "90%"]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], ["50%", "0%"]);

  const opacity2 = useTransform(scrollYProgress, [0.6, 1], ["0%", "100%"]);

  const textShadow = useTransform(
    scrollYProgress,
    [0.9, 1],
    [
      "0 0 5px #4f171e, 0 0 5px #4f171e, 0 0 10px #4f171e, 0 0 05px #4f171e",
      "0 0 0px #4f171e, 0 0 0px #4f171e, 0 0 0px #4f171e, 0 0 0px #4f171e",
    ]
  );

  // const x5 = useTransform(scrollYProgress, [0, 0.2], ["100%", "400%"]);
  // const x6 = useTransform(scrollYProgress, [0, 0.5], ["400%", "10%"]);

  return (
    <main className={styles.main} ref={targetRef}>
      <div className={styles.whiteDiv}>
        <motion.div className={styles.contentContainer} style={{ x }}>
          <motion.div
            className={styles.contentContainer2}
            style={{ width: x3, height: x2 }}
          >
            <h1 className={styles.title}>ALL THE INFO</h1>
            <motion.div
              className={styles.blurContainer}
              style={{ opacity }}
            ></motion.div>
            <div className={styles.listDiv}>
              <motion.ul
                className={styles.list}
                style={{ textShadow, opacity: opacity2 }}
              >
                <li>Getting There</li>
                <li>Where to Stay</li>
                <li>Schedule</li>
                <li>RSVP</li>
                <li>FAQs</li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.helloDiv}>
          {/* <motion.h1 className={styles.AllTheInfoText}>
            PACK YOUR BAGS
          </motion.h1> */}
          <img
            className={styles.cherubImg}
            src="/assets/thisWayToPisa.png"
            alt="Cherub"
          />
        </div>
      </div>
    </main>
  );
}
