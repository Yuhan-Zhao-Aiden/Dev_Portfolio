"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  }
];


const Nav = () => {

  const path = usePathname();

  return (
    <nav className="flex gap-8 items-center">
      {links.map((link) => (
        <Link href={link.path} key={link.name} className={`relative hover:text-accent capitalize ${link.path === path ? 'text-accent border-b-2 border-accent' : 'nav-link'}`}>
          {link.name}
        </Link>
          
      ))}
    </nav>
  )
}

export default Nav