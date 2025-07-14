import styles from "./AllTheInfo.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AllTheInfo() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <main className={styles.main} ref={targetRef}>
      <div className={styles.whiteDiv}>
        <motion.div className={styles.contentContainer} style={{ x }}>
          <h1 style={{ color: "black" }}>HELLO</h1>
        </motion.div>
        <div className={styles.helloDiv}>
          <h1>All The Info</h1>
        </div>

        <motion.div className={styles.contentContainer2} style={{ x: x2 }}>
          <h1 style={{ color: "black" }}>HELLO</h1>
        </motion.div>
      </div>
    </main>
  );
}
