import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.envelopeContainer}>
        <Image
          src={"/assets/HeaderEnvelope.png"}
          alt={"Envelope"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  );
}
