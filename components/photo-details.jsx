import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function PhotoDetails({ photoId, lang }) {
  const dictionary = await getDictionary(lang);
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${photoId}`);
  const photo = await response.json();
  return (
    <div class="grid grid-cols-12 gap-4 2xl:gap-10 ">
      <div class="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          class="max-w-full h-full max-h-[70vh] mx-auto"
          src={photo.url}
          alt={photo.title}
          width={900}
          height={500}
        />
      </div>

      <div class="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 class="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
        <div class="text-xs lg:text-sm text-black/60 mb-6">
          {photo?.tags?.map((tag) => `#${tag} `)}
        </div>

        <div class="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div class="flex justify-between">
            <span>{dictionary.views}</span>
            <span class="font-bold">{photo.views}</span>
          </div>

          <div class="flex justify-between">
            <span>{dictionary.share}</span>
            <span class="font-bold">{photo.share}</span>
          </div>

          <div class="flex justify-between">
            <span>{dictionary.uploadedOn}</span>
            <span class="font-bold">{photo.uploaded}</span>
          </div>
        </div>

        <div class="mt-6">
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center gap-3">
              <Image
                class="size-12 lg:size-14 rounded-full border"
                src={photo.author.avatar}
                alt="avatar"
                width={14}
                height={14}
              />
              <div class="spacy-y-3">
                <h6 class="lg:text-lg font-bold">{photo.author.name}</h6>
                <p class="text-black/60 text-xs lg:text-sm">
                  {photo.author.followers} {dictionary.followers}
                </p>
              </div>
            </div>

            <button class="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                class="w-5 h-5"
                alt="icon"
                width={5}
                height={5}
              />
              {dictionary.follow}
            </button>
          </div>

          <p class="text-xs lg:text-sm text-black/60">{photo.author.bio}</p>
        </div>

        <div class="mt-6">
          <div class="flex items-stretch gap-3">
            <button class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/heart.svg"
                class="w-5 h-5"
                alt="heart"
                width={5}
                height={5}
              />
              100
            </button>
            <button class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/save.svg"
                class="w-5 h-5"
                alt="save"
                width={5}
                height={5}
              />
              Save
            </button>
            <button class="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/share.svg"
                class="w-5 h-5"
                alt="share"
                width={5}
                height={5}
              />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
