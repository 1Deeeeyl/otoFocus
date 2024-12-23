"use client";
import Container from "@/components/container/Container";
import React from "react";
import album from "@/data/album";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
type AlbumKeys = keyof typeof album;
function AlbumDisplay() {
  const params = useParams<{ albumId: string }>();
  const name = params.albumId as AlbumKeys;
  if (!name || !(name in album)) {
    return notFound();
  }
  const photos = album[name].collection;

  return (
    <Container>
      <p>{album[name].description}</p>
      <RowsPhotoAlbum photos={photos} targetRowHeight={350} />
    </Container>
  );
}

export default AlbumDisplay;
