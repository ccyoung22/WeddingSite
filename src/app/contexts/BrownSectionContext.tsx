"use client";
import { createContext, useContext, useRef, useState, useEffect } from "react";

interface BrownSectionContextType {
  brownSectionRef: React.RefObject<HTMLDivElement | null>;
  isOverBrownSection: boolean;
  setIsOverBrownSection: (value: boolean) => void;
  isMobile: boolean;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const BrownSectionContext = createContext<BrownSectionContextType | null>(null);

export const useBrownSection = () => {
  const context = useContext(BrownSectionContext);

  if (!context)
    throw new Error("useBrownSection must be used within BrownSectionProvider");
  return context;
};

export const BrownSectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const brownSectionRef = useRef<HTMLDivElement | null>(null);
  const [isOverBrownSection, setIsOverBrownSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1100); // or whatever breakpoint you want
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <BrownSectionContext.Provider
      value={{
        brownSectionRef,
        isOverBrownSection,
        setIsOverBrownSection,
        isMobile,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </BrownSectionContext.Provider>
  );
};
