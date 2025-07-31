"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const languages = [
    {
      code: "bn",
      label: "Bangla",
      flag: "/bd.png",
    },
    {
      code: "en",
      label: "English",
      flag: "/usa.png",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-2"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <Image
          className="max-w-8"
          src={selected.flag}
          alt={selected.label}
          width={40}
          height={40}
        />
        {selected.label}
      </button>

      {open && (
        <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
            >
              <Image
                className="max-w-8"
                src={lang.flag}
                alt={lang.label}
                width={40}
                height={40}
              />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
