import styles from "./Header.module.css";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBrownSection } from "../../contexts/BrownSectionContext";

export default function Header() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isMobile, setIsLoading } = useBrownSection();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  return (
    <main className={styles.main}>
      {isMobile ? (
        <div className={styles.mobileHeader}>
          <div className={styles.fiftyContainer}>
            <img
              className={styles.cassyoungMobile}
              src="/assets/Newest2.png"
              alt="Envelope"
            />
          </div>
          <div className={styles.fiftyContainer}>
            <img
              className={styles.cassyoungMobile}
              src="/assets/NewestPostcardBack.png"
              alt="Envelope"
            />
          </div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowDown}>
              <div className={styles.arrowLineLeft}></div>
              <div className={styles.arrowLineRight}></div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.envelopeContainer}
        >
          <img
            className={styles.cassyoung}
            src="/assets/Newest2.png"
            alt="Envelope"
            style={{ display: isFlipped ? "none" : "block" }}
          />
          <img
            className={styles.cassyoung}
            src="/assets/NewestPostcardBack.png"
            alt="Envelope"
            style={{ display: isFlipped ? "block" : "none" }}
          />
          <div className={styles.arrowContainer}>
            <div className={styles.arrowDown}>
              <div className={styles.arrowLineLeft}></div>
              <div className={styles.arrowLineRight}></div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
