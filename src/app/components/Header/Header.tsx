import styles from "./Header.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.envelopeContainer}
      >
        <img
          className={styles.cassyoung}
          src="/assets/NewPostCard.png"
          alt="Envelope"
          style={{ display: isFlipped ? "none" : "block" }}
        />
        <img
          className={styles.cassyoung}
          src="/assets/PostCardBack4.png"
          alt="Envelope"
          style={{ display: isFlipped ? "block" : "none" }}
        />
      </motion.div>

      {/* <div className={styles.cherubBoy}>
        <Image
          src={"/assets/brownChrub.png"}
          alt={"Cherub"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div> */}
    </main>
  );
}
