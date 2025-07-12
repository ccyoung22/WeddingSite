import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <main className={styles.main}>
      <Image
        src="/assets/SYT.png"
        alt="heart"
        width={1300}
        height={900}
        style={{ objectFit: "contain" }}
      />
    </main>
  );
}
