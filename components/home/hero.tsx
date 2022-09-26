import { Arrow } from "../../utils/icons";

const Hero = () => {
  return (
    <section className="h-screen overflow-hidden w-full flex select-none bg-no-repeat bg-[url('/home/preview.gif')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center text-center w-full pt-16 relative text-white bg-secondary bg-opacity-70">
        <h1 className="w-full">Frame Fantasy</h1>
        <p className="my-2 italic">by</p>
        <h4>Purbafalguni Paul</h4>

        <span className="absolute bottom-4 left-50 right-50 w-10 text-opacity-50 animate-bounce text-white">
          <Arrow />
        </span>
      </div>
    </section>
  );
};

export default Hero;
