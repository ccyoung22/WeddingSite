"use client";

import styles from "./Loading.module.css";
import { useBrownSection } from "../../contexts/BrownSectionContext";
import { useEffect } from "react";
import BrownChrub from "./brownCherub";

const Loading: React.FC = () => {
  const { isLoading, setIsLoading, setIsOpen } = useBrownSection();

  useEffect(() => {
    if (isLoading) {
      // Close menu immediately when loading starts
      setIsOpen(false);

      // Set up timer to stop loading after 1.5s
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, setIsLoading, setIsOpen]); // Only depend on isLoading

  return (
    <>
      {isLoading && (
        <main className={styles.main}>
          <div className={styles.chrubContainer}>
            <BrownChrub />
          </div>

          <h1 className={styles.loadingText}>Loading</h1>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
          </div>
        </main>
      )}
    </>
  );
};

export default Loading;
