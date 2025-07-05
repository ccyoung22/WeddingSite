"use client";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import WereGettingMarried from "./components/WereGettingMarried/WereGettingMarried";
import Footer from "./components/Footer/Footer";
import AllTheInfo from "./components/AllTheInfo/AllTheInfo";
import Lenis from "lenis";

import Image from "next/image";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <WereGettingMarried />
        <AllTheInfo />
        <Footer />
      </main>
    </div>
  );
}
