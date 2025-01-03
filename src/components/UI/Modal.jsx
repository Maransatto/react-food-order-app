import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  const cssClasses = `modal ${className}`;

  return createPortal(
    <dialog ref={dialog} className={cssClasses} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
