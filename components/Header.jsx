import Link from "next/link";
import { FiTerminal } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold flex items-center">
            <span className="text-accent inline-block">
              <FiTerminal />
            </span>
            Dev
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <MagicButton className="px-5" icon={<FaRegHandshake />} >
              Hire Me
            </MagicButton>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header