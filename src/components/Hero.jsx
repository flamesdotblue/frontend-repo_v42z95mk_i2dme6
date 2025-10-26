import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6YTVG3x8wP1g2WbN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/40 to-white/90 dark:from-neutral-950/60 dark:via-neutral-950/40 dark:to-neutral-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-28">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Gen Z Uniform: Bold, Clean, Sustainably Made
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl"
            >
              Elevated basics and statement pieces engineered for everyday creators. Premium fabrics, minimal silhouettes, and planet-first production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#new" className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow">
                Shop New Arrivals
              </a>
              <a href="#lookbook" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors font-semibold">
                Explore Lookbook
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-8 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span>Ethically made</span>
              <span>•</span>
              <span>Premium organic cotton</span>
              <span>•</span>
              <span>Climate neutral</span>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
