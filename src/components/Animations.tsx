'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';


// ============================================================================
// ANIMATION CONSTANTS & SHARED CONFIG
// ============================================================================

export const ANIMATION_CONFIG = {
  easing: [0.25, 0.46, 0.45, 0.94] as const,
  durations: {
    fast: 0.3,
    medium: 0.6,
    slow: 0.8,
  },
  margins: {
    trigger: "-40%",
    stagger: "-50px",
  }
} as const;

// ============================================================================
// SCROLL-BASED ANIMATIONS
// ============================================================================

export const ScrollAnimatedSection = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: ANIMATION_CONFIG.margins.trigger });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ 
        duration: ANIMATION_CONFIG.durations.slow, 
        delay: delay,
        ease: ANIMATION_CONFIG.easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxBackground = ({ 
  children, 
  speed = 0,
  className = "" 
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 60}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnScroll = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// INTERACTIVE ANIMATIONS
// ============================================================================

export const FloatingCard = ({ 
  children, 
  className = "",
  intensity = 1 
}: { 
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * intensity]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5 * intensity]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -5 * intensity]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateX, rotateY }}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: ANIMATION_CONFIG.durations.fast }
      }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// STAGGERED ANIMATIONS
// ============================================================================

export const StaggeredContainer = ({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: { 
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: ANIMATION_CONFIG.margins.stagger });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: ANIMATION_CONFIG.durations.medium,
            ease: ANIMATION_CONFIG.easing
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};