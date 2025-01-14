import Link from "next/link";
import React from "react";
import gallery from "@/data/gallery";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function page() {
  return (
    <>
      {gallery.map((album, index) => (
        <CardContainer className="flex-grow" key={index}>
          <CardBody className="bg-gray-50 relative group/card    border-black/[0.1] min-w-[20rem] h-auto rounded-xl border  xl:w-[604px] lg:w-[30rem]">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600  px-6 pt-6"
            >
              <h2>{album.title}</h2>
            </CardItem>

            <CardItem translateZ="100" className="w-full pt-6">
              <Link href={`/${album.albumId}`}>
              <Image
                src={album.cover}
                width="4000"
                height="2667"
                className="h-60 w-full object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
                quality={100}
                placeholder="blur"
                blurDataURL={album.blurDataURL}
              />
              </Link>
            </CardItem>
            <div className="flex items-center py-6 justify-end px-6">
              <CardItem
                translateZ={20}
                as={Link}
                href={`/${album.albumId}`}
                className="px-4 py-2 text-xs font-normal  hover:underline transition-all ease-in-out duration-200 hover:text-sky-500"
              >
                View Album →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  );
}
