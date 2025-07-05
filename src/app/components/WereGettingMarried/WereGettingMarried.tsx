import styles from "./WereGettingMarried.module.css";
import Image from "next/image";

export default function WereGettingMarried() {
  return (
    <main className={styles.main}>
      <Slider />
      <Slider />
      <Slider />
    </main>
  );
}

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Phrase />
      <Phrase />
      <Phrase />
    </div>
  );
};

const Phrase = () => {
  return (
    <div className={styles.singlePhrase}>
      <h1>We&apos;re Getting Married</h1>
      <div className={styles.heart}>
        <Image src="/assets/BlurHeart.png" alt="heart" width={70} height={70} />
      </div>
    </div>
  );
};
