export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
} as const;

export const FADE_UP_DURATION = 0.8;

export const fadeUpHidden = { opacity: 0, y: 40 };

export const fadeUpVisible = {
  opacity: 1,
  y: 0,
  transition: {
    duration: FADE_UP_DURATION,
    ease: "easeOut" as const,
  },
};

export const fadeUpVariants = {
  hidden: fadeUpHidden,
  visible: fadeUpVisible,
};

export function fadeUpWithDelay(delaySeconds: number) {
  return {
    hidden: fadeUpHidden,
    visible: {
      ...fadeUpVisible,
      transition: {
        ...fadeUpVisible.transition,
        delay: delaySeconds,
      },
    },
  };
}
