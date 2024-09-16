import MagicButton from "@/components/ui/MagicButton";
import React from "react";
import Photo from "@/components/Photo";
import { FiDownload } from "react-icons/fi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import TypewriterEffect from "@/components/TypewriterEffect";
import SocialButton from "@/components/SocialButton";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            
            <span className="text-xl flex justify-center xl:justify-start mb-5 xl:mb-0"><TypewriterEffect /> Developer</span>
            <h1>
              Hello I&apos;m
              <br />
              <span className="text-accent">Aiden Zhao</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A full stack developer with a passion towards building modern and
              dynamic web applications using React.js, Next.js and Node.js.
            </p>

            {/* buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <MagicButton className="px-7" icon={<FiDownload />}>
                Resume
              </MagicButton>
              <div className="flex gap-5">
                <SocialButton icon={<IoLogoGithub />} href="https://github.com/Yuhan-Zhao-Aiden"/>
                <SocialButton icon={<IoLogoLinkedin />} href="#"/>

              </div>
            </div>
          </div>

          {/* photo */}
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Home;
