import { useEffect, useRef } from 'react';

/**
 * Adds a `.revealed` class to the element once it enters the viewport.
 * Pair with a CSS rule like:
 *   .reveal { opacity: 0; transform: translateY(12px); transition: opacity 500ms, transform 500ms; }
 *   .reveal.revealed { opacity: 1; transform: none; }
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
