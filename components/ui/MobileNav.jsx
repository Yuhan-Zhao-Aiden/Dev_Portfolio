"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FiTerminal } from "react-icons/fi";
import { links } from "@/data";

const MobileNav = () => {

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold flex items-center justify-center">
              <span className="text-accent inline-block">
                <FiTerminal />
              </span>
              Dev
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-7 px-3">
          {links.map((link) => {
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`${pathname === link.path && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transiton-all`}
              >
                <div className="flex justify-between">
                  {link.name}
                  {link.icon}
                </div>
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
