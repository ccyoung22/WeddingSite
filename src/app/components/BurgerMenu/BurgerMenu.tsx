"use client";
import styles from "./BurgerMenu.module.css";
import { useRouter } from "next/navigation";
import MenuButton from "./MenuButton";
import { useState, useEffect } from "react";
import { useBrownSection } from "../../contexts/BrownSectionContext";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { brownSectionRef, isOverBrownSection, setIsOverBrownSection } =
    useBrownSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;

          // Trigger when the white element's bottom is above the burger menu position
          // Assuming burger menu is at the top, trigger when white element is 20px past the top
          setIsOverBrownSection(rect.bottom < 20);
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.5, 1],
      }
    );

    if (brownSectionRef.current) {
      observer.observe(brownSectionRef.current);
    }

    return () => observer.disconnect();
  }, [brownSectionRef, setIsOverBrownSection]);

  function handleClick(route: string) {
    router.push(route);
  }

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOverBrownSection={isOverBrownSection}
      />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.menuPopOver}
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? "0%" : "100%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className={styles.menuListContainer}>
                <ul className={styles.menuList}>
                  <li onClick={() => handleClick("/")}>Home</li>
                  <li onClick={() => handleClick("/getting-there")}>
                    Getting There
                  </li>
                  <li onClick={() => handleClick("/where-to-stay")}>
                    Where To Stay
                  </li>
                  <li onClick={() => handleClick("/schedule")}>Schedule</li>
                  <li onClick={() => handleClick("/rsvp")}>RSVPs</li>
                  <li onClick={() => handleClick("/faqs")}>FAQS</li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
