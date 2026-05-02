import { useRef } from "react";
import { Close } from "../icons";
import css from "./ui-modal.module.css";
import type { HTMLAttributes, ReactNode } from "react";
import { classNames as clsx } from "@/shared/lib/classNames";
import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click";
import { withPortal } from "@/shared/lib/hocs/with-portal";
import { useEventListener } from "@/shared/lib/hooks/use-event-listener";

export type UiModalProps = HTMLAttributes<HTMLDivElement> & {
  classNames?: {
    overlay?: string;
    modal?: string;
    close?: string;
  };
  isOpen: boolean;
  onClose?: () => void;
};

export function UiModal(props: UiModalProps) {
  return withPortal(BaseUiModal)(props);
}

function BaseUiModal({ isOpen, children, classNames, onClose }: UiModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(modalRef, () => {
    onClose?.();
  });

  useEventListener("keydown", (event) => {
    const eventKey = (event as KeyboardEvent).key;
    if (eventKey === "Escape") {
      onClose?.();
    }
  });

  if (!isOpen) return;

  return (
    <div className={clsx(css.overlay, {}, [classNames?.overlay])}>
      <div ref={modalRef} className={clsx(css.modal, {}, [classNames?.modal])}>
        <button
          className={clsx(css.close, {}, [classNames?.close])}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <Close width={24} height={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

UiModal.Header = function UiModalHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(css.modal__header, {}, [className])}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(css.modal__body, {}, [className])}>{children}</div>
  );
};

UiModal.Footer = function UiModalFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(css.modal__footer, {}, [className])}>{children}</div>
  );
};
