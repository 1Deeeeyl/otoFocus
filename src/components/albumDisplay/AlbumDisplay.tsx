"use client";

import Container from "@/components/container/Container";
import React from "react";
import album from "@/data/album";
import {
  RowsPhotoAlbum,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
import Image from "next/image";
import "react-photo-album/rows.css";
import { useParams, notFound } from "next/navigation";

type AlbumKeys = keyof typeof album;

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        quality={100}
      />
    </div>
  );
}

function AlbumDisplay() {
  const params = useParams<{ albumId: string }>();
  const name = params.albumId as AlbumKeys;

  if (!name || !(name in album)) {
    return notFound();
  }

  const photos = album[name].collection;
  return (
    <Container>
      <p className="mb-6">{album[name].description}</p>

      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1280}
        targetRowHeight={350}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    </Container>
  );
}

export default AlbumDisplay;
