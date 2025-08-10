"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "./MenuButton.module.css";

interface ButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOverBrownSection: boolean;
}

export default function AnimatedBurgerMenu({
  isOpen,
  setIsOpen,
  isOverBrownSection,
}: ButtonProps) {
  //   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={styles.button}
        aria-label="Toggle menu"
      >
        <div className={styles.iconContainer}>
          <motion.div
            className={styles.line}
            style={{
              backgroundColor:
                isOverBrownSection && !isOpen ? "#ffddf0" : "#4f171e",
            }}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : -8,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={styles.line}
            style={{
              backgroundColor:
                isOverBrownSection && !isOpen ? "#ffddf0" : "#4f171e",
            }}
            animate={{
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 20 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={styles.line}
            style={{
              backgroundColor:
                isOverBrownSection && !isOpen ? "#ffddf0" : "#4f171e",
            }}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </div>
      </button>
    </>
  );
}
