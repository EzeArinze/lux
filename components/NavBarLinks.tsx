"use client";

import NavData from "@/lib/NavData";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBarLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden  sm:flex gap-2 items-center list-none duration-300">
      {NavData.map((data) => {
        const isActive = pathname.startsWith(data.links);

        return (
          <li key={data.title}>
            <Link
              href={data.links}
              className={`${isActive && "text-gray-600"}`}
            >
              {data.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarLinks;
