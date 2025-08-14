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
        <img src={"/assets/RSVP2.png"} className={styles.paperImg} />
        <div className={styles.textOverlay}>
          <p>When you RSVP, please include:</p>
          <ul className={styles.list}>
            <li>- Names of all guests attending</li>
            <li>- Any dietary requirements or allergies</li>
            <li>
              - Which events {`you'll`} be attending (Friday drinks, Saturday
              wedding, Sunday pool party).
            </li>
          </ul>
          <p className={styles.rsvpText}>
            <strong>
              Please send all RSVP information by <strong>November 1st</strong>{" "}
              directly to Caitlin or Jake
            </strong>
          </p>
          <p>
            Please let us know where {`you'll `}
            be staying by 1st Feburary 2026 at the latest. This will help us
            organise transport and ensures everything runs smoothly over the
            weekend.{" "}
          </p>
          <p>
            {" "}
            If you have any questions, please feel free to message either of us
            anytime, {`we're`} happy to help with anything you need to know.
          </p>
        </div>
      </div>
    </div>
  );
}
