import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[35vh] md:h-[50vh] lg:h-[90vh]">
  <img
    src="/bytebattle.png"
    alt="Hero"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    {/* <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
      Your Name Here
    </h1> */}
  </div>
</div>

  );
}

export default Hero;
