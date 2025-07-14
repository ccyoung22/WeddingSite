import styles from "./AllTheInfo.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AllTheInfo() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "80%"]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], ["10%", "90%"]);
  const x4 = useTransform(scrollYProgress, [0.5, 1], ["300%", "600%"]);

  return (
    <main className={styles.main} ref={targetRef}>
      <div className={styles.whiteDiv}>
        <motion.div className={styles.contentContainer} style={{ x }}>
          <motion.div
            className={styles.contentContainer2}
            style={{ width: x3, height: x2 }}
          >
            <motion.h1
              style={{ color: "black", fontSize: x4 }}
              className={styles.hello}
            >
              HELLO
            </motion.h1>
          </motion.div>
        </motion.div>
        {/* <div className={styles.helloDiv}>
          <h1>All The Info</h1>
        </div> */}
      </div>
    </main>
  );
}
