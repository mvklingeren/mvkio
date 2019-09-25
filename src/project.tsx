/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import React from "react";

type ProjectProps = {
  name: string;
  url: string;
};

const Project: React.FC<ProjectProps> = ({ name, url }: ProjectProps) => {
  return (
    <div
      css={css`
        border: 1px solid lightblue;
        width: 16%;
        margin: 5px;
        text-align: center;
        padding: 10px 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px; /* 5px rounded corners */
      `}
      className="card"
    >
      <label>{name}</label>
      <br />
      <a href={`${url}`} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  );
};

export default Project;
