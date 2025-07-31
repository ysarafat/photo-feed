"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="border border-green-600 flex flex-col p-4 md:p-8 rounded-md "
    >
      <button onClick={onHide} className="flex justify-end cursor-pointer mb-3">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}
