"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FiTerminal } from "react-icons/fi";
import { links } from "@/data";

const MobileNav = () => {
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

        <nav>nav</nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
