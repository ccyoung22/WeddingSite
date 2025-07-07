import styles from "./Header.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.envelopeContainer}
      >
        <Image
          src={"/assets/HeaderEnvelope.png"}
          alt={"Envelope"}
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>
      <div className={styles.cherubBoy}>
        <Image
          src={"/assets/cherub-boy.png"}
          alt={"Cherub"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  );
}
