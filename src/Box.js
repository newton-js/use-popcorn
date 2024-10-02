import { useState } from "react";
import { ButtonToggle } from "./ButtonToggle";

export function Box({ children }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <ButtonToggle isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
      {isOpen1 && children}
    </div>
  );
}
