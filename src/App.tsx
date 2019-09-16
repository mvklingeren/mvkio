import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "./logo";
import SideMenu from "./side_menu";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <header
          css={css`
            height: 76px;
            background: orange;
          `}
        >
          {/* <Logo name="logo_transparent.png" /> */}
          <p>header</p>
        </header>
        <div className="App">
          <nav
            css={css`
              flex: 0 0 20%;
              background: darkkhaki;
            `}
          >
            <SideMenu>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
            </SideMenu>
          </nav>
          <main
            css={css`
              flex: 0 0 80%;
            `}
          >
            <Switch>
              <Route exact path="/" component={() => <article>home</article>} />
              <Route path="/about" component={() => <p>about</p>} />
              <Route
                component={() => <>I can't find what you're looking for.</>}
              />
            </Switch>
          </main>
        </div>
        <footer
          css={css`
            height: 76px;
            background: violet;
          `}
        >
          <p>
            No copyright; do whatever you'd like with the content of this site.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
