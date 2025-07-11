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
        <img
          className={styles.cassyoung}
          src="/assets/darker-card.png"
          alt="Envelope"
        />
      </motion.div>
      {/* <div className={styles.bottomTextDiv}>
        <div>
          <h1>26/06/26</h1>
        </div>
        <div>
          <h1>TERRICOLA, PISA</h1>
        </div>
      </div> */}

      {/* <div className={styles.cherubBoy}>
        <Image
          src={"/assets/cherub-boy.png"}
          alt={"Cherub"}
          fill
          style={{ objectFit: "contain" }}
        />
      </div> */}
    </main>
  );
}
