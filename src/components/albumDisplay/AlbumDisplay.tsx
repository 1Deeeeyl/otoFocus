"use client";

import React, { useState } from "react";
import Container from "@/components/container/Container";
import album from "@/data/album";
import {
  RowsPhotoAlbum,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

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

  // Always call hooks before any conditional logic or early returns
  const [index, setIndex] = useState(-1);

  // Early return after hooks to prevent React Hook order issues
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
        onClick={({ index }) => setIndex(index)}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </Container>
  );
}

export default AlbumDisplay;
