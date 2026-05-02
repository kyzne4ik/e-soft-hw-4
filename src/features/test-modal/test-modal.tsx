import { UiModal } from "@/shared/ui/ui-modal";
import type { UiModalProps } from "@/shared/ui/ui-modal/ui-modal";

export function TestModal(props: UiModalProps) {
  return (
    <UiModal {...props}>
      <UiModal.Header>Тестовая модалка</UiModal.Header>
      <UiModal.Body>some-text-body</UiModal.Body>
      <UiModal.Footer>some-text-footer</UiModal.Footer>
    </UiModal>
  );
}
