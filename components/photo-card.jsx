import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ photo }) {
  return (
    <Link href={`/photos/${photo.id}`} class="group">
      <Image src={photo.url} alt={photo.title} width={700} height={700} />

      <div class="title-container">
        <h4 class="title">{photo.title}</h4>
      </div>
    </Link>
  );
}
