import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [enabledState, setEnabled] = useLocalStorage("dark_theme");
  const isEnabled = typeof enabledState !== "undefined" && enabledState;
  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isEnabled]);
  return [enabledState, setEnabled];
}
