"use client";

import Image from "next/image";
import { useState } from "react";

export function TestimonialAvatar({ src, fallback }: { src: string | null; fallback: string }) {
  const [failed, setFailed] = useState<string | null>(null);
  const portrait = src && failed !== src ? src : null;

  return (
    <Image
      className="testimonial-avatar"
      src={portrait ?? fallback}
      alt=""
      width={52}
      height={52}
      onError={portrait ? () => setFailed(portrait) : undefined}
    />
  );
}
