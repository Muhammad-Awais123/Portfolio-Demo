// High-speed, 60/120fps GPU-accelerated motion presets

export const snappyEase = [0.22, 1, 0.36, 1];

export const fadeIn = (direction = 'up', delay = 0, distance = 24) => {
  return {
    hidden: {
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        delay,
        ease: snappyEase,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const scaleUp = (delay = 0) => {
  return {
    hidden: { scale: 0.95, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay,
        ease: snappyEase,
      },
    },
  };
};

export const hoverCardVariants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: 0.25,
      ease: snappyEase,
    },
  },
};
