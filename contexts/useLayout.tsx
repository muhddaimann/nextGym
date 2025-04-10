'use client';

import React, { createContext, useContext, useState } from 'react';

type LayoutContextType = {
  showLayout: boolean;
  setShowLayout: (show: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | null>(null);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [showLayout, setShowLayout] = useState(true);

  return (
    <LayoutContext.Provider value={{ showLayout, setShowLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider');
  }
  return context;
};
