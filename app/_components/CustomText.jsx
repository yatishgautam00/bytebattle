"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/app/utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <div>
    <motion.p
      variants={textContainer}
      className={`font-normal text-secondary-white text-yellow-400 ${textStyles}  `}
    >
      {typeof title === "string" &&
        Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
    </motion.p>
  </div>
);

export const TitleText = ({ title, textStyles }) => (
  <div>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  </div>
);
