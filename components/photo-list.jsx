import PhotoCard from "./photo-card";

export default function PhotoList({ photos }) {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
