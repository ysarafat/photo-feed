import PhotoDetails from "@/components/photo-details";

export default function PhotoDetailsPage({ params: { id, lang } }) {
  return <PhotoDetails photoId={id} lang={lang} />;
}
