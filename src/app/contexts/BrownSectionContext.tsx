"use client";
import { createContext, useContext, useRef, useState } from "react";

interface BrownSectionContextType {
  brownSectionRef: React.RefObject<HTMLDivElement | null>;
  isOverBrownSection: boolean;
  setIsOverBrownSection: (value: boolean) => void;
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

  return (
    <BrownSectionContext.Provider
      value={{ brownSectionRef, isOverBrownSection, setIsOverBrownSection }}
    >
      {children}
    </BrownSectionContext.Provider>
  );
};
