import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <img src={"/assets/RSVP.png"} className={styles.paperImg}></img>
    </div>
  );
}
