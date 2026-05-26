"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { QuoteModal } from "./QuoteModal";

interface QuoteContextValue {
  open: (service?: string) => void;
  close: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();

  const open = (s?: string) => {
    setService(s);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ open, close }}>
      {children}
      <QuoteModal open={isOpen} onClose={close} defaultService={service} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
