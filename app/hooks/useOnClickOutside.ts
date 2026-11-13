// useOnClickOutside.ts
import { useEffect, type RefObject } from "react";

// Note: the ref can be empty (null) before the element mounts
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) {
  // Logic
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Note: e.target is a plain EventTarget, so we tell TS it is a Node
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [ref, callback]); // Note: new dependency list
}
