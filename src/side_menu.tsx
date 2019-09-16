import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const base = css`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const SideMenu: React.FC = ({ children }) => {
  if (!children) return <></>;

  const childLinks = React.Children.map(children, child => {
    return <li>{child}</li>;
  });

  return (
    <ul
      css={css`
        ${base};
        background-color: #eee;
      `}
    >
      {childLinks}
    </ul>
  );
};

export default SideMenu;
