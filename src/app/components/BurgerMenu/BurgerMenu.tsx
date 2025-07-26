"use client";
import styles from "./BurgerMenu.module.css";
import MenuButton from "./MenuButton";
import { useState } from "react";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <div className={styles.menuPopOver}></div>}
    </>
  );
};

export default BurgerMenu;
