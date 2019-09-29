import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "./logo";
import SideMenu from "./side_menu";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ProjectsGrid from "./projects";
import Home from "./home";
import AutoTyping from "./auto_typing";

const App: React.FC = () => {
  return (
    <div>
      <header
        css={css`
          background: black;
          position: fixed;
          width: 100%;
          height: 76px;
          top: 0;
          z-index: 1;
          -webkit-box-shadow: 0px 10px 37px -3px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 10px 37px -3px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 10px 37px -3px rgba(0, 0, 0, 0.75);
        `}
      >
        <div>this is some text</div>
      </header>
      <div
        css={css`
          @import url("https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");

          body {
            margin: 0;
            font-family: "Be Vietnam", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h2 {
            font-family: "Be Vietnam", sans-serif;

            // font-family: "Mansalva", cursive;
            font-size: 2.4em;
          }

          main h2 {
            text-align: center;
            color: white;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
          footer {
            text-align: center;
          }

          ul {
            list-style: none;
            background-color: #444;
            text-align: center;
            padding: 0;
            margin: 0;
          }
          li {
            font-family: "Oswald", sans-serif;
            font-size: 1.2em;
            line-height: 40px;
            height: 40px;
            border-bottom: 1px solid #888;
          }

          a {
            text-decoration: none;
            color: #fff;
            display: block;
            transition: 0.3s background-color;
          }

          a:hover {
            background-color: #005f5f;
          }

          a.active {
            background-color: #fff;
            color: #444;
            cursor: default;
          }

          @media screen and (min-width: 600px) {
            li {
              width: 120px;
              border-bottom: none;
              height: 50px;
              line-height: 50px;
              font-size: 1.4em;
            }

            /* Option 1 - Display Inline */
            .nav li {
              display: inline-block;
              margin-right: -4px;
            }

            /* Options 2 - Float
          .nav li {
            float: left;
          }
          .nav ul {
            overflow: auto;
            width: 600px;
            margin: 0 auto;
          }
          .nav {
            background-color: #444;
          }
          */
          }
        `}
      >
        <BrowserRouter>
          <main
            css={css`
              margin-top: 76px;
            `}
          >
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <div
                      css={css`
                        background: black;
                      `}
                    >
                      <div
                        css={css`
                          // -webkit-box-shadow: inset 0px 20px 18px -11px rgba(0, 0, 0, 0.75);
                          // -moz-box-shadow: inset 0px 20px 18px -11px rgba(0, 0, 0, 0.75);
                          // box-shadow: inset 0px 20px 18px -11px rgba(0, 0, 0, 0.75);

                          background: url("/static/skylimit.jpg");
                          background-repeat: no-repeat;
                          background-size: 100%; //propotional resize
                          height: 800px;
                          width: 100%;
                          -webkit-clip-path: polygon(
                            0 0,
                            100% 0,
                            100% 86%,
                            0 100%
                          );
                          clip-path: polygon(0 0, 100% 0, 100% 86%, 0 100%);
                          margin-bottom: 200px;
                        `}
                      >
                        <div
                          css={css`
                            position: absolute;
                            left: 56%;
                            top: 200px;
                          `}
                        >
                          {/* <img src="/static/annotation.svg" css={css``} /> */}
                          <div
                            css={css`
                              width: 14px;
                              height: 14px;
                              border: 1px solid white;
                              -webkit-box-shadow: 0px 0px 12px 0px
                                rgba(0, 0, 0, 0.75);
                              -moz-box-shadow: 0px 0px 12px 0px
                                rgba(0, 0, 0, 0.75);
                              box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
                            `}
                          ></div>
                          <span
                            css={css`
                              font-family: "Playfair Display", serif;
                              font-size: 1.6em;
                              display: inline-block;
                              color: #000;
                              text-shadow: 2px 2px #fff;
                            `}
                          >
                            <i>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                              <br /> Nunc egestas ipsum mauris, ac vehicula nisl
                              cursus non.
                            </i>
                          </span>
                        </div>
                      </div>
                      <div
                        css={css`
                          min-height: 400px;
                        `}
                      >
                        <h2>
                          <AutoTyping
                            text="  Thank you for visiting my profile page. Here you can
                            find
                            <br /> some info about the projects i am current working or have
                            been working on."
                            speed={1.8}
                          />
                        </h2>
                      </div>
                      {/* <Home /> */}
                    </div>
                  );
                }}
              />
              <Route path="/about" component={() => <div css={css``}></div>} />
              <Route
                path="/projects"
                render={() => (
                  <ProjectsGrid items={Array.from(Array(25).keys())} visible />
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
        </BrowserRouter>
        <footer
          css={css`
            height: 66px;
            background: violet;
          `}
        >
          <p>
            No copyright; do whatever you`&apos;`d like with the content of this
            site.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
