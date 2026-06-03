import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function EnduroSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/fc4bff9d-7c7c-4163-aea7-92367656b64b/files/7274c0b9-2c7a-4c82-992a-18eee2ea3119.jpg"
            alt="Эндуро мотоцикл в лесу под дождём"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-wide">
        Любая дорога — наша стихия
      </h3>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10">
        Грязь, дождь, лес — мы строим байки, которые живут в экстриме.
      </p>
    </div>
  );
}
