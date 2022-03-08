import Link from "next/link";

import { NAV_ITEMS, ROUTES } from "../../utils/constants/shared";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-secondary z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between py-4">
        <Link href={ROUTES.INDEX}>
          <a>
            <img src="/brand/RTwT.png" alt="Frame Fantasy" />
          </a>
        </Link>

        {NAV_ITEMS.map((nav) => (
          <Link key={nav.href} href={nav.href}>
            <a
              target={nav.external ? "_blank" : ""}
              rel="noopener noreferrer"
              className="text-lg font-medium"
            >
              {nav.content}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
