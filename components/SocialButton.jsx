import Link from "next/link"

const SocialButton = ({ icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex items-center justify-center rounded-full w-10 h-10 border border-accent text-xl text-accent hover:bg-accent hover:text-primary">
        {icon}
      </div>
    </Link>
  )
}

export default SocialButton