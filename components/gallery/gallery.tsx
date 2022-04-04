import { GalleryProps } from "../../utils/interfaces/gallery";
import { Images } from "./";

const Gallery = ({ name, tagline, images }: GalleryProps) => {
  return (
    <section>
      <h1>{name}</h1>

      <Images images={images} alt={`Frame Fantasy | ${name} - ${tagline}`} />
    </section>
  );
};

export default Gallery;
