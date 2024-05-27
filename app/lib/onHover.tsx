
"use client";
import { useEffect, useState, useRef } from "react";

export default function useOnHover<T extends HTMLElement>(): {
  ref: React.RefObject<T>;
  hover: boolean;
} {
  const [hover, setHover] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [ref.current]);

  return { ref, hover };
}
