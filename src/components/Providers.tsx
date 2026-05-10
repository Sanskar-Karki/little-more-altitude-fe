"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { LanguageProvider } from '@/context/LanguageContext';
import { ToastProvider } from './ui/Toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <ToastProvider>
        {children}
        <ProgressBar
          height="3px"
          color="#D8C4B6"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ToastProvider>
    </LanguageProvider>
  );
};

export default Providers;
