"use client";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useBrownSection } from "../contexts/BrownSectionContext";

export default function Page() {
  const { setIsOverBrownSection } = useBrownSection();

  useEffect(() => {
    setIsOverBrownSection(false);
  }, [setIsOverBrownSection]);
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <p>FAQs</p>
      </div>
      <div className={styles.content}>
        <p className={styles.question}>{`What's`} the dress code? </p>
        <p className={styles.answer}>
          Sexy fun smart casual iconic.{" "}
          {`(Joking, we actually dont mind what you wear,
          just wear what you're comfortable in, any colour works)`}{" "}
        </p>
        <p className={styles.question}>Where is the wedding taking place?</p>
        <p className={styles.answer}>
          Everything on Saturday and Sunday will be at Villa Donna Camilla, so
          once you arrive each day, {`we'll`} be staying put.{" "}
        </p>
        <p className={styles.question}>
          What should I bring for the pool party?{" "}
        </p>
        <p className={styles.answer}>
          Bikinis/swimming trunks, sun cream and sunglasses.{`It's`} just going
          to be a chill lounging in the sun day after the wedding.
        </p>
        <p className={styles.question}>What about gifts?</p>
        <p className={styles.answer}>
          The only gift we actually want it to see all of your faces at the
          wedding. We know coming to Italy is already a big ask, so we{" "}
          {`aren't `}
          expecting any gifts.
          <br />
          <br />
          However if you would like to get us something, we are planning on
          going to South America in December for our honeymoon and we would love
          contribtuions to our honeymoon fund -
        </p>
        <button
          className={styles.buttons}
          onClick={() =>
            window.open(
              "https://www.paypal.com/paypalme/CassHoneymoonFund",
              "_blank"
            )
          }
        >
          <span>Honeymoon Fund</span>
        </button>

        <p className={styles.question}>
          {`We've`} put some answers here to some questions {`we've`} had so
          far. We will keep updating this page as we get more questions closer
          to the wedding. Feel free to message us with anything else {`you'd`}{" "}
          like to know!
        </p>
      </div>
    </main>
  );
}
