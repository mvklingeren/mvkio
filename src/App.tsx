import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "./logo";
import SideMenu from "./side_menu";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ProjectsGrid from "./projects";

const App: React.FC = () => {
  return (
    <div css={css``}>
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
            <div></div>
          </header>
          <div className="App">
            <nav
              css={css`
                background: gainsboro;
                flex: 1;
              `}
            >
              <Logo name="logo_transparent.png" height={250} />

              <SideMenu>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
              </SideMenu>
            </nav>
            <main
              css={css`
                flex: 5;
              `}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <article>home</article>}
                />
                <Route
                  path="/about"
                  component={() => <div css={css``}></div>}
                />
                <Route
                  path="/projects"
                  render={() => (
                    <ProjectsGrid
                      items={Array.from(Array(25).keys())}
                      visible
                    />
                  )}
                />

                <Route
                  component={() => {
                    return (
                      <p>I can`&apos;`t find what you`&apos;`re looking for.</p>
                    );
                  }}
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
              No copyright; do whatever you`&apos;`d like with the content of
              this site.
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
