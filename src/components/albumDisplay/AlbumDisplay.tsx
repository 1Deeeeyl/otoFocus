"use client";

import React, { useState } from "react";
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
    <>
      <h2 className="mb-6 text-3xl pb-5 font-medium">{album[name].title}</h2>
      

      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1280}
        targetRowHeight={300}
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
    </>
  );
}

export default AlbumDisplay;
