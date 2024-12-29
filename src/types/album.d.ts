// types/album.d.ts
import "react-photo-album";

declare module "react-photo-album" {
  export interface Photo {
    blurDataURL?: string; 
  }
}
