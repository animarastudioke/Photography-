"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("naz-loaded")) {
      setVisible(false);
      return;
    }

    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("naz-loaded", "1");
        setTimeout(() => setVisible(false), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image src="/images/logo-ivory.png" alt="" width={48} height={48} className="h-12 w-12" priority />
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-script text-3xl text-ivory"
          >
            Naz
          </motion.span>
          <div className="h-px w-40 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-gold-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="eyebrow text-[10px]">Loading the story</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
