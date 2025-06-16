import { useEffect } from "react";

export default function PetalFalling() {
  useEffect(() => {
    const petals = [];
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 2 + Math.random() * 3 + "s";
      petal.style.opacity = 0.7 + Math.random() * 0.3;
      document.body.appendChild(petal);
      petals.push(petal);
    }
    return () => {
      petals.forEach(p => document.body.removeChild(p));
    };
  }, []);
  return null;
}
