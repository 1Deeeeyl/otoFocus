import Container from "@/components/container/Container";
import React from "react";
import album from "@/data/gallery";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

function page() {
  const brc = album.brc.collection;
  return (
    <Container>
      <p>Portfolio ko</p>
      <RowsPhotoAlbum
        photos={brc}
        targetRowHeight={350}
      />
    </Container>
  );
}

export default page;
