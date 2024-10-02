import { useEffect } from "react";

export function useKey(key, action) {
  console.log("useKey just mounted");
  useEffect(
    function () {
      function callback(e) {
        console.log(e.code);
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [key, action]
  );
}
