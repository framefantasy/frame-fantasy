import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { NAV_ITEMS, ROUTES } from "../../utils/constants/shared";
import { deslugify } from "../../utils/functions";

const Navbar = () => {
  const [topbarOpen, setTopbarOpen] = useState<boolean>(false);

  const {
    query: { slug },
  } = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary z-40">
      <div className="w-full px-10 mx-auto hidden lg:flex items-center justify-between py-4">
        <Link href={ROUTES.INDEX}>
          <img src="/brand/RTwT.png" alt="Frame Fantasy" className="w-40" />
        </Link>

        <Link href={ROUTES.ABOUT} className="text-lg font-medium capitalize">
          About
        </Link>

        {NAV_ITEMS.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            target={nav.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`text-lg font-medium capitalize ${
              nav.slug === slug
                ? "bg-transparent text-primary text-shadow-glow-white-lg"
                : "text-primary"
            }`}
          >
            {deslugify(nav.slug)}
          </Link>
        ))}

        <Link href={ROUTES.CONTACT} className="text-lg font-medium capitalize">
          Contact
        </Link>
      </div>

      <div className="fixed top-0 left-0 w-full lg:hidden">
        <div
          className={`${
            topbarOpen ? "max-h-screen" : "max-h-0"
          } bg-secondary relative z-50 mt-0 shadow-topbar w-full min-w-max transition-all duration-1000 overflow-hidden`}
        >
          <div className="flex flex-col px-6 py-8">
            <Link href={ROUTES.ABOUT} className="text-lg font-medium capitalize mb-2">
              About
            </Link>

            {NAV_ITEMS.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="text-lg font-medium capitalize mb-2"
                target={nav.external ? "_blank" : ""}
                rel="noopener noreferrer"
                onClick={() => setTopbarOpen(false)}
              >
                {deslugify(nav.slug)}
              </Link>
            ))}

            <Link
              href={ROUTES.CONTACT}
              className="text-lg font-medium capitalize mb-2"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative top-0 left-0 text-right mt-2 mr-4 rounded-full">
          <button
            onClick={() => setTopbarOpen(!topbarOpen)}
            className={`hamburger${topbarOpen ? " open" : ""}`}
          >
            <span className="bg-primary" />
            <span className="bg-primary" />
            <span className="bg-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
