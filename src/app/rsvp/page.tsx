"use client";
import styles from "./page.module.css";
import { useBrownSection } from "../contexts/BrownSectionContext";
import { useEffect } from "react";

export default function Page() {
  const { setIsLoading, setIsOverBrownSection } = useBrownSection();

  useEffect(() => {
    setIsOverBrownSection(false);
  }, [setIsOverBrownSection]);

  useEffect(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={"/assets/RSVPtext.webp"} className={styles.paperImg} />
      </div>
    </div>
  );
}
