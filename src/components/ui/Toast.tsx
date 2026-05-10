"use client";

import React, { useState, useEffect, createContext, useContext, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 w-full max-w-md pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <div className={`
                flex items-center gap-4 p-4 rounded-2xl shadow-2xl backdrop-blur-xl border
                ${t.type === "success" ? "bg-white/90 border-green-500/20 text-green-800" : ""}
                ${t.type === "error" ? "bg-white/90 border-red-500/20 text-red-800" : ""}
                ${t.type === "info" ? "bg-white/90 border-brand-light/20 text-brand-dark" : ""}
              `}>
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                  ${t.type === "success" ? "bg-green-500/10 text-green-600" : ""}
                  ${t.type === "error" ? "bg-red-500/10 text-red-600" : ""}
                  ${t.type === "info" ? "bg-brand-medium/10 text-brand-medium" : ""}
                `}>
                  {t.type === "success" && <CheckCircle2 size={20} />}
                  {t.type === "error" && <AlertCircle size={20} />}
                  {t.type === "info" && <Info size={20} />}
                </div>
                
                <p className="flex-1 text-sm font-bold leading-tight">
                  {t.message}
                </p>

                <button 
                  onClick={() => removeToast(t.id)}
                  className="p-1 hover:bg-black/5 rounded-lg transition-colors text-black/20 hover:text-black/40"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
