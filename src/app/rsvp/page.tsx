import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={"/assets/RSVP.png"} className={styles.paperImg} />
        <div className={styles.textOverlay}>
          <p>
            We {`can't`} wait to celebrate with you! Please send all RSVP
            information to cjterricciola26@gmail.com
          </p>{" "}
          <p>
            Please confirm whether {`you'll`} be joining us by 1st November
            2025.{" "}
          </p>
          <p>When you RSVP, please include:</p>
          <ul>
            <li>Names of all guests attending</li>
            <li>Any dietary requirements or allergies</li>
            <li>
              Which events {`you'll`} be attending (Friday drinks, Saturday
              wedding, Sunday pool party).
            </li>
          </ul>
          <p>
            Please let us know where {`you'll`}
            be staying by 1st March 2026 This helps us organise transport and
            ensures everything runs smoothly over the weekend.{" "}
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
