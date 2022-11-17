import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Ikram Abdillah", "Guy-who-loves-Black-Coffe", "<In Learning U Will Teach/>", "<In Teaching U Will Learn/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <p>{text}</p>
      <Cursor cursorColor="#F7AB0A" />
    </div>
  );
}
