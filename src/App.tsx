import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "./logo";
import SideMenu from "./side_menu";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ProjectsGrid from "./projects";

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

// const spinaround = keyframes`
//   from {
//       -webkit-transform: rotateY(0deg);
//       opacity:0;
//   }
//   to {
//       -webkit-transform: rotateY(359deg);
//       opacity:1;
//   }
// `;

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
                  component={() => <p>I can't find what you're looking for.</p>}
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
              No copyright; do whatever you'd like with the content of this
              site.
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
