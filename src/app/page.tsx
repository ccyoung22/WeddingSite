import styles from "./page.module.css";
import Header from "./components/Header/Header";
import WereGettingMarried from "./components/WereGettingMarried/WereGettingMarried";
import Footer from "./components/Footer/Footer";
import AllTheInfo from "./components/AllTheInfo/AllTheInfo";

export default function Home() {
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
