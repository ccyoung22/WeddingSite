"use client";
import styles from "./page.module.css";
import { useBrownSection } from "../contexts/BrownSectionContext";
import { useEffect } from "react";

export default function Page() {
  const { setIsLoading } = useBrownSection();

  useEffect(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={"/assets/RSVP.png"} className={styles.paperImg} />
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
          <p>
            Please send all RSVP information by <strong>November 1st</strong>{" "}
            to-
          </p>
          <p className={styles.email}>
            <strong>cjterricciola26@gmail.com</strong>
          </p>
          <p>
            Please let us know where {`you'll `}
            be staying by 1st March 2026. This will help us organise transport
            and ensures everything runs smoothly over the weekend.{" "}
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
