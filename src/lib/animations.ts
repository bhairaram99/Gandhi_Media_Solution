export const fadeIn = {
  initial: { opacity: 0, transform: "translateY(18px)" },
  enter: { opacity: 1, transform: "translateY(0)" },
  transition: "all 0.4s ease",
};

export const staggerDelay = (index: number, base = 90) => `${index * base}ms`;
