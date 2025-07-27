"use client";
import { useRouter } from "next/navigation";
import styles from "./AllTheInfo.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useBrownSection } from "../../contexts/BrownSectionContext";

export default function AllTheInfo() {
  const { brownSectionRef, isMobile } = useBrownSection();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 0.5], ["200%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);

  const opacity2 = useTransform(scrollYProgress, [0.6, 1], ["0%", "100%"]);

  const textShadow = useTransform(
    scrollYProgress,
    [0.9, 1],
    [
      "0 0 5px #4f171e, 0 0 5px #4f171e, 0 0 10px #4f171e, 0 0 05px #4f171e",
      "0 0 0px #4f171e, 0 0 0px #4f171e, 0 0 0px #4f171e, 0 0 0px #4f171e",
    ]
  );

  const router = useRouter();

  function handleClick(route: string) {
    router.push(route);
  }

  return (
    <main className={styles.main} ref={targetRef}>
      <div className={styles.whiteDiv}>
        <motion.div
          className={styles.contentContainer}
          ref={brownSectionRef}
          style={{ x }}
        >
          <motion.div
            className={styles.contentContainer2}
            style={{
              width: x3,
              height: x2,
            }}
          >
            <div className={styles.listImgDiv}>
              <div className={styles.folderDiv}>
                {isMobile ? (
                  <motion.img
                    style={{ opacity: opacity2 }}
                    className={styles.mobileFolderImg}
                    src="/assets/mobileFolder.png"
                    alt="Folder"
                  />
                ) : (
                  <motion.img
                    style={{ opacity: opacity2 }}
                    className={styles.folderImg}
                    src="/assets/Folder5.png"
                    alt="Folder"
                  />
                )}
              </div>
              <motion.div
                className={styles.listDiv}
                style={{ textShadow, opacity: opacity2 }}
              >
                <ul className={styles.list}>
                  <li
                    onClick={() => handleClick("/getting-there")}
                    className={styles.listItem}
                  >
                    Getting There
                  </li>
                  <li
                    onClick={() => handleClick("/where-to-stay")}
                    className={styles.listItem}
                  >
                    Where to Stay
                  </li>
                  <li
                    onClick={() => handleClick("/schedule")}
                    className={styles.listItem}
                  >
                    Schedule
                  </li>
                  <li
                    onClick={() => handleClick("/rsvp")}
                    className={styles.listItem}
                  >
                    RSVP
                  </li>
                  <li
                    onClick={() => handleClick("/faqs")}
                    className={styles.listItem}
                  >
                    FAQs
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.helloDiv}>
          <img
            className={styles.cherubImg}
            src="/assets/newWhiteChrub.png"
            alt="Cherub"
          />
        </div>
      </div>
    </main>
  );
}
