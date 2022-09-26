import { FOOTER_ITEMS } from "../../utils/constants/shared";

const Footer = () => {
  return (
    <footer className="w-full flex items-center flex-col bg-accent mt-12 text-white p-10">
      <div className="flex items-center gap-x-4 mb-4">
        {FOOTER_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <span>Copyright © 2020 Frame Fantasy - All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
