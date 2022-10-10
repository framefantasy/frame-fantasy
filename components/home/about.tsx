const About = () => {
  return (
    <section className="pt-40" id="about">
      <div className="w-full px-10 lg:px-0 lg:w-10/12 mx-auto flex flex-col xl:flex-row items-center">
        <figure className="flex xl:w-3/12">
          <img
            src="/home/cover.jpeg"
            alt="Purbafalguni Paul | Frame Fantasy"
            className="flex w-full max-w-xs mx-auto"
          />
        </figure>

        <div className="xl:w-9/12 xl:px-12 text-white">
          <h2 className="w-10/12 border-b-4 border-primary flex flex-col lg:flex-row lg:items-end text-white pb-4 mt-12 xl:mt-0 mb-8">
            Purbafalguni Paul
          </h2>

          <div className="mb-4">
            <h4 className="mb-2">My Story</h4>
            <p>
              In 2012, I moved to Mumbai to get my Master's Degree in Journalism
              & Mass Communication along with Diploma in Photography. After
              three years of working as an assistant at a major photography
              studio and working under many well-known photographers, I started
              Frame Fantasy in Nov 2017. Meanwhile, I have achieved many awards
              in photography, worked with many NGOs, Work with ICICI Bank.
            </p>
          </div>

          <div>
            <h4 className="mb-2">My Experience</h4>
            <p>
              I have had the privilege to shoot many events and people. I am
              experienced with many locations and photography styles. The
              photograph style may differ from assignment to assignment, but my
              commitment to quality and craft is unwavering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
