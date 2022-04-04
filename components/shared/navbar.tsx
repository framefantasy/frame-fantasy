import Link from "next/link";
import { useRouter } from "next/router";

import { NAV_ITEMS, ROUTES } from "../../utils/constants/shared";
import { deslugify } from "../../utils/functions";

const Navbar = () => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary z-40">
      <div className="w-10/12 mx-auto flex items-center justify-between py-4">
        <Link href={ROUTES.INDEX}>
          <a>
            <img src="/brand/RTwT.png" alt="Frame Fantasy" />
          </a>
        </Link>

        {NAV_ITEMS.filter((item) => item.slug !== slug).map((nav) => (
          <Link key={nav.href} href={nav.href}>
            <a
              target={nav.external ? "_blank" : ""}
              rel="noopener noreferrer"
              className="text-lg font-medium capitalize"
            >
              {deslugify(nav.slug)}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
