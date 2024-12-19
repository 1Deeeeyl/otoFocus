import brcphoto1 from "@/assets/images/gallery/brc/brc1.jpg";
import brcphoto2 from "@/assets/images/gallery/brc/brc2.jpg";
import brcphoto3 from "@/assets/images/gallery/brc/brc3.jpg";
import brcphoto4 from "@/assets/images/gallery/brc/brc4.jpg";
import brcphoto5 from "@/assets/images/gallery/brc/brc5.jpg";
import brcphoto6 from "@/assets/images/gallery/brc/brc6.jpg";
import brcphoto7 from "@/assets/images/gallery/brc/brc7.jpg";
import brcphoto8 from "@/assets/images/gallery/brc/brc8.jpg";
import brcphoto9 from "@/assets/images/gallery/brc/brc9.jpg";
import brcphoto10 from "@/assets/images/gallery/brc/brc10.jpg";
import brcphoto11 from "@/assets/images/gallery/brc/brc11.jpg";
import brcphoto12 from "@/assets/images/gallery/brc/brc12.jpg";
import brcphoto13 from "@/assets/images/gallery/brc/brc13.jpg";
import brcphoto14 from "@/assets/images/gallery/brc/brc14.jpg";
import brcphoto15 from "@/assets/images/gallery/brc/brc15.jpg";
import brcphoto16 from "@/assets/images/gallery/brc/brc16.jpg";
import brcphoto17 from "@/assets/images/gallery/brc/brc17.jpg";
import brcphoto18 from "@/assets/images/gallery/brc/brc18.jpg";
import brcphoto19 from "@/assets/images/gallery/brc/brc19.jpg";
import brcphoto20 from "@/assets/images/gallery/brc/brc20.jpg";
import brcphoto21 from "@/assets/images/gallery/brc/brc21.jpg";
import brcphoto22 from "@/assets/images/gallery/brc/brc22.jpg";
import brcphoto23 from "@/assets/images/gallery/brc/brc23.jpg";
import brcphoto24 from "@/assets/images/gallery/brc/brc24.jpg";
import brcphoto25 from "@/assets/images/gallery/brc/brc25.jpg";
import brcphoto26 from "@/assets/images/gallery/brc/brc26.jpg";
import brcphoto27 from "@/assets/images/gallery/brc/brc27.jpg";
import brcphoto28 from "@/assets/images/gallery/brc/brc28.jpg";
import brcphoto29 from "@/assets/images/gallery/brc/brc29.jpg";
import brcphoto30 from "@/assets/images/gallery/brc/brc30.jpg";
import brcphoto31 from "@/assets/images/gallery/brc/brc31.jpg";
import brcphoto32 from "@/assets/images/gallery/brc/brc32.jpg";
import brccoverphoto from "@/assets/images/gallery/brc/brccover.jpg";



type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Album = {
  title: string;
  cover: string;  
  collection: Photo[];  
};

type Albums = {
  brc: Album;  
};

const albums: Albums = {
  brc: {
    title: 'BRC Track Photos',
    cover: brccoverphoto.src,  
    collection: [
      {
        src: brcphoto1.src,
        width: brcphoto1.width,
        height: brcphoto1.height,
        alt: "Untitled Photo 1",
      },
      {
        src: brcphoto2.src,
        width: brcphoto2.width,
        height: brcphoto2.height,
        alt: "Untitled Photo 2",
      },
      {
        src: brcphoto3.src,
        width: brcphoto3.width,
        height: brcphoto3.height,
        alt: "Untitled Photo 3",
      },
      {
        src: brcphoto4.src,
        width: brcphoto4.width,
        height: brcphoto4.height,
        alt: "Untitled Photo 4",
      },
      {
        src: brcphoto5.src,
        width: brcphoto5.width,
        height: brcphoto5.height,
        alt: "Untitled Photo 5",
      },
      {
        src: brcphoto6.src,
        width: brcphoto6.width,
        height: brcphoto6.height,
        alt: "Untitled Photo 6",
      },
      {
        src: brcphoto7.src,
        width: brcphoto7.width,
        height: brcphoto7.height,
        alt: "Untitled Photo 7",
      },
      {
        src: brcphoto8.src,
        width: brcphoto8.width,
        height: brcphoto8.height,
        alt: "Untitled Photo 8",
      },
      {
        src: brcphoto9.src,
        width: brcphoto9.width,
        height: brcphoto9.height,
        alt: "Untitled Photo 9",
      },
      {
        src: brcphoto10.src,
        width: brcphoto10.width,
        height: brcphoto10.height,
        alt: "Untitled Photo 10",
      },
      {
        src: brcphoto11.src,
        width: brcphoto11.width,
        height: brcphoto11.height,
        alt: "Untitled Photo 11",
      },
      {
        src: brcphoto12.src,
        width: brcphoto12.width,
        height: brcphoto12.height,
        alt: "Untitled Photo 12",
      },
      {
        src: brcphoto13.src,
        width: brcphoto13.width,
        height: brcphoto13.height,
        alt: "Untitled Photo 13",
      },
      {
        src: brcphoto14.src,
        width: brcphoto14.width,
        height: brcphoto14.height,
        alt: "Untitled Photo 14",
      },
      {
        src: brcphoto15.src,
        width: brcphoto15.width,
        height: brcphoto15.height,
        alt: "Untitled Photo 15",
      },
      {
        src: brcphoto16.src,
        width: brcphoto16.width,
        height: brcphoto16.height,
        alt: "Untitled Photo 16",
      },
      {
        src: brcphoto17.src,
        width: brcphoto17.width,
        height: brcphoto17.height,
        alt: "Untitled Photo 17",
      },
      {
        src: brcphoto18.src,
        width: brcphoto18.width,
        height: brcphoto18.height,
        alt: "Untitled Photo 18",
      },
      {
        src: brcphoto19.src,
        width: brcphoto19.width,
        height: brcphoto19.height,
        alt: "Untitled Photo 19",
      },
      {
        src: brcphoto20.src,
        width: brcphoto20.width,
        height: brcphoto20.height,
        alt: "Untitled Photo 20",
      },
      {
        src: brcphoto21.src,
        width: brcphoto21.width,
        height: brcphoto21.height,
        alt: "Untitled Photo 21",
      },
      {
        src: brcphoto22.src,
        width: brcphoto22.width,
        height: brcphoto22.height,
        alt: "Untitled Photo 22",
      },
      {
        src: brcphoto23.src,
        width: brcphoto23.width,
        height: brcphoto23.height,
        alt: "Untitled Photo 23",
      },
      {
        src: brcphoto24.src,
        width: brcphoto24.width,
        height: brcphoto24.height,
        alt: "Untitled Photo 24",
      },
      {
        src: brcphoto25.src,
        width: brcphoto25.width,
        height: brcphoto25.height,
        alt: "Untitled Photo 25",
      },
      {
        src: brcphoto26.src,
        width: brcphoto26.width,
        height: brcphoto26.height,
        alt: "Untitled Photo 26",
      },
      {
        src: brcphoto27.src,
        width: brcphoto27.width,
        height: brcphoto27.height,
        alt: "Untitled Photo 27",
      },
      {
        src: brcphoto28.src,
        width: brcphoto28.width,
        height: brcphoto28.height,
        alt: "Untitled Photo 28",
      },
      {
        src: brcphoto29.src,
        width: brcphoto29.width,
        height: brcphoto29.height,
        alt: "Untitled Photo 29",
      },
      {
        src: brcphoto30.src,
        width: brcphoto30.width,
        height: brcphoto30.height,
        alt: "Untitled Photo 30",
      },
      {
        src: brcphoto31.src,
        width: brcphoto31.width,
        height: brcphoto31.height,
        alt: "Untitled Photo 31",
      },
      {
        src: brcphoto32.src,
        width: brcphoto32.width,
        height: brcphoto32.height,
        alt: "Untitled Photo 32",
      },
    ],
  },
};

export default albums;
