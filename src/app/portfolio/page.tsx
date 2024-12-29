"use client";
import Link from "next/link";
import React from "react";
import gallery from "@/data/gallery";
import Container from "@/components/container/Container";

export default function page() {
  console.log(gallery[3].albumId);
  return (
    <>
      <Container className="justify-center flex flex-row gap-5">
        {gallery.map((album, index) => (
          <div key={index} className="w-max flex flex-col justify-center items-center text-center">
            <p>{album.title}</p>
            <Link href={`portfolio/${album.albumId}`} className="text-blue-600">
              Go Here
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
}
