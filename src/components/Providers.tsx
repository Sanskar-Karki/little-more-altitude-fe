"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { LanguageProvider } from '@/context/LanguageContext';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      {children}
      <ProgressBar
        height="3px"
        color="#D8C4B6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </LanguageProvider>
  );
};

export default Providers;
