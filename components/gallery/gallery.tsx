import { GalleryProps } from "../../utils/interfaces/gallery";
import { Gallery as GallerySection } from "../shared";

const Gallery = ({ name, tagline, images }: GalleryProps) => {
  return (
    <section>
      <h1>{name}</h1>

      <GallerySection
        images={images}
        alt={`Frame Fantasy | ${name} - ${tagline}`}
      />
    </section>
  );
};

export default Gallery;
