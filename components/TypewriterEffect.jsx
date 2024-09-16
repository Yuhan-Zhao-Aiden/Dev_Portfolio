"use client"
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
  return (

    <Typewriter
      options={{
        strings: ['Full Stack', "Front-End", "Back-End"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypewriterEffect