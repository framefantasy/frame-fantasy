import { Instagram, Facebook } from "../../utils/logos";

const Footer = () => {
  return (
    <footer className="w-full flex items-center flex-col bg-accent mt-12 text-white p-10">
      <div className="flex items-center gap-x-4 mb-4">
        <Facebook className="w-6" />
        <Facebook className="w-6" />
        <Facebook className="w-6" />
        <Instagram className="w-10" />
      </div>

      <span>Copyright © 2020 Frame Fantasy - All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
