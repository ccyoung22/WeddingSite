"use client";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          src="/assets/hearts-pic.png"
          alt="heart"
          width={1100}
          height={900}
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  );
}
