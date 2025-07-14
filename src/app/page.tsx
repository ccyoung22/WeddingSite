"use client";
import styles from "./page.module.css";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import AllTheInfo from "./components/AllTheInfo/AllTheInfo";
import Lenis from "lenis";

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

        <AllTheInfo />
        {/* <Footer /> */}
        <div
          style={{ height: "1920px", backgroundColor: "blue" }}
          className={styles.blueDiv}
        ></div>
      </main>
    </div>
  );
}
