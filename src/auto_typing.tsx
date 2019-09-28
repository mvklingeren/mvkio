import React, { useEffect, useState } from "react";

type AutoTypingProps = { text: string; speed?: number };

const AutoTyping: React.FC<AutoTypingProps> = props => {
  const [characters, setCharacters] = useState("");

  let getRandTypeSpeed = 200 * Math.random();

  if (props.speed) getRandTypeSpeed = getRandTypeSpeed / props.speed;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCharacters(props.text.substr(0, characters.length + 1));
    }, getRandTypeSpeed);

    return () => clearTimeout(timer);
  }, [characters]);

  return <div dangerouslySetInnerHTML={{ __html: characters }} />;
};

export default AutoTyping;
