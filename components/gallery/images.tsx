import { useEffect, useState } from "react";

import { ImagesProps } from "../../utils/interfaces/gallery";
import Masonry from "react-masonry-css";
const Images = ({ images, alt }: ImagesProps) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setOpenImage(null));
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      {openImage && (
        <div
          onClick={() => setOpenImage(null)}
          className="bg-secondary fixed z-50 top-0 left-0 w-full h-screen"
        >
          <span className="fixed right-0 top-0 text-6xl md p-12 cursor-pointer">
            X
          </span>

          <img
            src={openImage}
            alt={alt}
            className="object-contain h-full w-full p-16"
          />
        </div>
      )}

      {images.length ? (
        <>
          {/* @ts-ignore */}
          <Masonry
            breakpointCols={{
              default: 3,
              1024: 2,
              768: 1,
            }}
            className="flex w-auto"
            columnClassName="bg-clip-padding"
          >
            {images.map((img) => (
              <>
                <img
                  key={img}
                  src={img}
                  alt={alt}
                  onClick={() => setOpenImage(img)}
                  className="w-full p-2 cursor-pointer"
                />
              </>
            ))}
          </Masonry>
          <h5 className="text-center py-8">More images will be added soon!</h5>
        </>
      ) : (
        <h4 className="text-center py-8">Images will be added soon!</h4>
      )}
    </>
  );
};

export default Images;
