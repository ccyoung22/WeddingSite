import styles from "./WereGettingMarried.module.css";
import Image from "next/image";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function WereGettingMarried() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className={styles.main}>
      <div className={styles.parentDiv} ref={container}>
        <Slider left="-55%" progress={scrollYProgress} direction="left" />
        <Slider left="-15%" progress={scrollYProgress} direction="right" />
        <Slider left="-100%" progress={scrollYProgress} direction="left" />
      </div>
    </main>
  );
}

const Slider = ({
  left,
  progress,
  direction,
}: {
  left: string;
  progress: MotionValue<number>;
  direction: string;
}) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className={styles.sliderContainer} style={{ left, x }}>
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div className={styles.singlePhrase}>
      <h1 className={styles.phraseText}>We&apos;re Getting Married</h1>
      <div className={styles.heart}>
        <Image
          src="/assets/cherub-boy.png"
          alt="heart"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
