"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useBrownSection } from "../../contexts/BrownSectionContext";

export default function Footer() {
  const { isMobile } = useBrownSection();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {isMobile ? (
          <Image
            src="/assets/MobileSYT.png"
            alt="heart"
            width={650}
            height={500}
            style={{ objectFit: "contain" }}
          />
        ) : (
          <Image
            src="/assets/hearts-pic.png"
            alt="heart"
            width={1100}
            height={900}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
    </main>
  );
}
