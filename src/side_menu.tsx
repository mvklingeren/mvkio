import React, { ReactChildren, ReactNode } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const base = css`
  list-style: none;
`;

const SideMenu: React.FC = ({ children }: { children?: ReactNode }) => {
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
        background-color: inherit;
      `}
    >
      {childLinks}
    </ul>
  );
};

export default SideMenu;
