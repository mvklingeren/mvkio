import React from "react";

type ImgProps = {
  name: string;
  height?: number;
  width?: number;
};

const Logo: React.FC<ImgProps> = ({ name, height, width }: ImgProps) => {
  return (
    <img
      src={name}
      height={height ? height : "auto"}
      width={width ? width : "auto"}
      alt={name}
    />
  );
};

export default Logo;
