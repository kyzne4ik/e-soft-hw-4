import { useState } from "react";
import { TestModal } from "./test-modal";
import { UiButton } from "@/shared/ui/ui-button";

export function TestButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <UiButton onClick={onOpenChange}>Тестовая модалка</UiButton>
      <TestModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
