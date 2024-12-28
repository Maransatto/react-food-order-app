import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);

  const cssClasses = `modal ${className}`;

  return createPortal(
    <dialog ref={dialog} className={cssClasses}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
