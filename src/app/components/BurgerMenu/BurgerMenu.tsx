"use client";
import styles from "./BurgerMenu.module.css";
import { useRouter, usePathname } from "next/navigation";
import MenuButton from "./MenuButton";
import { useState, useEffect } from "react";
import { useBrownSection } from "../../contexts/BrownSectionContext";
import { motion, AnimatePresence } from "framer-motion";

const BurgerMenu: React.FC = () => {
  const router = useRouter();
  const {
    brownSectionRef,
    isOverBrownSection,
    setIsOverBrownSection,
    isOpen,
    setIsOpen,
  } = useBrownSection();

  const [reloadObserver, setReloadObserver] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          setIsOverBrownSection(rect.bottom < 20);
        });
      },
      { threshold: [0, 0.1, 0.2, 0.5, 1] }
    );

    if (brownSectionRef.current) {
      observer.observe(brownSectionRef.current);

      const rect = brownSectionRef.current.getBoundingClientRect();
      setIsOverBrownSection(rect.bottom < 20);
    }

    return () => observer.disconnect();
  }, [brownSectionRef, setIsOverBrownSection, reloadObserver]);

  function handleClick(route: string) {
    router.push(route);

    setTimeout(() => {
      setReloadObserver((prev) => prev + 1);

      if (route !== "/") {
        setTimeout(() => {
          setIsOverBrownSection(false);
        }, 10);
      }
    }, 100);
  }

  useEffect(() => {
    setIsOverBrownSection(false);
  }, [pathname, setIsOverBrownSection]);

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
                  <li
                    onClick={() => handleClick("/")}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => handleClick("/getting-there")}
                    style={{ cursor: "pointer" }}
                  >
                    Getting There
                  </li>
                  <li
                    onClick={() => handleClick("/where-to-stay")}
                    style={{ cursor: "pointer" }}
                  >
                    Where To Stay
                  </li>
                  <li
                    onClick={() => handleClick("/schedule")}
                    style={{ cursor: "pointer" }}
                  >
                    Schedule
                  </li>
                  <li
                    onClick={() => handleClick("/rsvp")}
                    style={{ cursor: "pointer" }}
                  >
                    RSVPs
                  </li>
                  <li
                    onClick={() => handleClick("/faqs")}
                    style={{ cursor: "pointer" }}
                  >
                    FAQS
                  </li>
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
