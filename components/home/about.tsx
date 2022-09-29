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
          <div className="w-10/12 border-b-4 border-primary flex flex-col lg:flex-row lg:items-end text-white pb-4 mt-12 xl:mt-0 mb-12">
            <h2 className="capitalize">Purbafalguni Paul</h2>
            <span className="text-sm lg:ml-8 mt-4 lg:mt-0 font-medium">
              a quote maybe
            </span>
          </div>

          <p className="mb-4">
            Sit ullamco culpa exercitation aute. Culpa sunt duis consequat
            reprehenderit. Duis deserunt ut in eiusmod fugiat labore duis et non
            cillum non mollit ex. Non excepteur occaecat reprehenderit
            incididunt. Irure sint voluptate sint est do sint reprehenderit
            fugiat sunt qui magna incididunt veniam. Irure duis aliquip labore
            ipsum aute ullamco ad minim excepteur in minim pariatur nisi labore.
            Duis nulla ea tempor quis est ad do voluptate irure cupidatat non.
          </p>

          <p>
            Eu esse ex consectetur labore deserunt est ullamco consequat
            consequat dolore excepteur elit voluptate. Officia proident commodo
            amet cillum. Voluptate ut consectetur enim proident mollit in sit
            qui proident nulla excepteur est duis. Amet occaecat ea ipsum
            deserunt. Laboris dolor minim do nulla. Enim officia officia duis
            duis deserunt consequat nisi eiusmod eiusmod aliquip nostrud aliquip
            magna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
