"use client";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>Where to Stay</h1>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.sectionContainerOne}>
          <h2>
            Given the remote location of our wedding venue, we{`'ll`} be
            organising transport to and from the celebration for all guests.
          </h2>
        </div>
        <div className={styles.sectionContainerTwo}>
          <div className={styles.innerSection}>
            <h2 className={styles.titleText}>Our Recommended Option</h2>
            <p className={styles.pText2}>
              We highly recommend booking one of the beautiful apartments at Il
              Frutteto for the Friday to Monday of the wedding weekend. This
              accommodation has been recommended to us by our wedding venue and
              is our preferred option as it ensures seamless transport
              coordination.
            </p>
            <button
              className={styles.buttons}
              onClick={() =>
                window.open(
                  "https://www.booking.com/hotel/it/il-frutteto-lari.en-gb.html",
                  "_blank"
                )
              }
            >
              <span>Check Out Il Frutteto</span>
            </button>
          </div>
          <div className={styles.innerSection}>
            <h2>Alternative Accommodations</h2>
            <p className={styles.pText}>
              If you prefer to stay elsewhere, we recommend looking in one of
              these areas:
            </p>
            <ul className={styles.locationList}>
              <li>Lari</li>
              <li>Cevoli</li>
              <li>Ripoli</li>
              <li>Ponsaco</li>
            </ul>
            <p className={styles.pText2}>
              <strong>Important Note:</strong> Your accommodation must be within
              a 10-minute drive of the wedding venue. Before booking anywhere
              other than Il Frutteto, please send us the details for
              confirmation that we can arrange transport.
            </p>
            <button
              className={styles.buttons}
              onClick={() =>
                window.open("https://www.villadonnacamilla.it/", "_blank")
              }
            >
              <span>Our Wedding Venue</span>
            </button>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h2>Booking Timeline</h2>
          <p className={styles.pText}>
            <br />
            There are no taxi services in this area, so advance planning is
            important.
            <br />
            <br />
            While {"we'd"} appreciate knowing your accommodation choice as soon
            as possible, we need your confirmed accommodation details by March
            1st, 2026 at the latest to guarantee transport arrangements.
            <br />
            <br />
            Please book early if possible and keep us informed to ensure you can
            get to and from the wedding without any stress.
          </p>
        </div>
      </div>
    </div>
  );
}
