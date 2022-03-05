import React from 'react';
import Typewriter from 'typewriter-effect';
import './typing.css';

export default function Typing() {



  return (
      <>
 <Typewriter
 options={{
    loop: true,
 }}
  onInit={(typewriter) => {
    typewriter.typeString('A developer')
      .pauseFor(700)
      .deleteChars(9)
      .typeString('designer')
      .pauseFor(700)
      .deleteChars(8)
      .pauseFor(700)
      .typeString('developer and UX/UI designer.')
      .pauseFor(1000)
      .start();
  }}
/>
</>
  )
}
