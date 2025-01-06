import brccover from "../../public/images/gallery/brc/cover.jpg";
import ciscover from "../../public/images/gallery/cis/cover.jpg";
import dirtucover from "../../public/images/gallery/dirtu/cover.jpg";
import subarucover from "../../public/images/gallery/subaru/cover.jpg";

const gallery = [
  {
    albumId: "brc",
    title: "Batangas Racing Circuit",
    cover: brccover,
    blurDataURL: brccover.blurDataURL,
  },
  {
    albumId: "cis",
    title: "Clark International Speedway",
    cover: ciscover,
    blurDataURL: ciscover.blurDataURL,
  },
  {
    albumId: "dirtuclinic3",
    title: "Dirt University Rally Clinic 3",
    cover: dirtucover,
    blurDataURL: dirtucover.blurDataURL,
  },
  {
    albumId: "subarutrackdayexperience",
    title: "Subaru Track Day Experience",
    cover: subarucover,
    blurDataURL: subarucover.blurDataURL,
  },
];

export default gallery;
