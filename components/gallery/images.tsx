import { useEffect, useState } from "react";

import { ImagesProps } from "../../utils/interfaces/gallery";
import Masonry from "react-masonry-css";

const Images = ({ images, alt }: ImagesProps) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setOpenImage(null));
  }, []);

  return (
    <>
      {openImage && (
        <div
          onClick={() => setOpenImage(null)}
          className="bg-secondary fixed z-50 top-0 left-0 w-full h-screen"
        >
          <span className="absolute right-0 top-0 text-6xl p-12 cursor-pointer">
            X
          </span>
          <figure className="flex justify-center items-center h-full p-16">
            <img src={openImage} alt={alt} />
          </figure>
        </div>
      )}

      <Masonry
        breakpointCols={3}
        className={`flex w-auto${openImage ? " over flow-hidden h -0" : ""}`}
        columnClassName="bg-clip-padding"
      >
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt={alt}
            onClick={() => setOpenImage(img)}
            className="w-full p-2 cursor-pointer"
          />
        ))}
      </Masonry>
    </>
  );
};

export default Images;
