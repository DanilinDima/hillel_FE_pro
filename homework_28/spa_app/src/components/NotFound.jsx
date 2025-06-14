import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    throw new Error("Page not found");
  }, []);

  return null; 
}
