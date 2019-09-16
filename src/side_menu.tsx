import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const base = css`
  list-style: none;
  flex: 0 0 20%;
`;

const SideMenu: React.FC = ({ children }) => {
  if (!children) return <></>;

  const childLinks = React.Children.map(children, child => {
    return (
      <li
        css={css`
          padding: 5px 10px;
        `}
      >
        {child}
      </li>
    );
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
