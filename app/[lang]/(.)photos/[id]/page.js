import Modal from "@/components/modal";
import PhotoDetails from "@/components/photo-details";

export default function PhotoModal({ params: { id, lang } }) {
  return (
    <Modal>
      <PhotoDetails photoId={id} lang={lang} />
    </Modal>
  );
}
