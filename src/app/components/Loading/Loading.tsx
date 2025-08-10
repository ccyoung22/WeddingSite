"use client";

import styles from "./Loading.module.css";
import { useBrownSection } from "../../contexts/BrownSectionContext";
import { useEffect } from "react";

const Loading: React.FC = () => {
  const { isLoading, setIsLoading } = useBrownSection();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading, setIsLoading]);

  return (
    <>
      {isLoading && (
        <main className={styles.main}>
          <h1>Loading</h1>
        </main>
      )}
    </>
  );
};

export default Loading;
