"use client"
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative z-0">
      <div className="absolute w-[30%] h-[50%] top-10 left-3 xl:top-0 xl:left-0 bg-pattern-1 bg-repeat" />
      <div className="absolute w-[20%] h-[20%] bottom-10 right-4 xl:bottom-0 xl:right-0 bg-pattern-2 bg-repeat" />

      <Image
        src="/Designer (5).png"
        alt="avatar"
        priority
        quality={100}
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Photo;
