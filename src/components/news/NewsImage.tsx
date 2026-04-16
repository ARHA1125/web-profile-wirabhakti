'use client';

import Image from 'next/image';
import { useState } from 'react';

type NewsImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const FALLBACK_SRC = '/image/banner1-wb.jpg';

export default function NewsImage({
  src,
  alt,
  className,
  priority,
  sizes,
}: NewsImageProps) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_SRC);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => {
        if (imageSrc !== FALLBACK_SRC) {
          setImageSrc(FALLBACK_SRC);
        }
      }}
    />
  );
}
