import React, { ReactNode } from "react";

type ImgProps = {
  name: string;
};

const Logo: React.FC<ImgProps> = ({ name }: ImgProps) => {
  return <img src={name} />;
};

export default Logo;
