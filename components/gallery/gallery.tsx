import { GalleryProps } from "../../utils/interfaces/gallery";
import { Images } from "./";

const Gallery = ({ name, tagline, images }: GalleryProps) => {
  return (
    <section>
      <h1 className="text-center mt-12 lg:mt-40 mb-8 capitalize">{name}</h1>

      <Images images={images} alt={`Frame Fantasy | ${name} - ${tagline}`} />
    </section>
  );
};

export default Gallery;
