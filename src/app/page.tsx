import React from "react";


import GalleryList from "@/components/galleryList/GalleryList";

export default function page() {
  return (
    <>
      
        <div className=" flex flex-wrap flex-grow justify-center gap-10">
          <GalleryList />
        </div>
     
    </>
  );
}
