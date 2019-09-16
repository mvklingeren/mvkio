import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
import Logo from "./logo";
import SideMenu from "./side_menu";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        {/* <Logo name="logo_transparent.png" /> */}
        <p>header</p>
      </header>
      <div className="App">
        <nav>
          <SideMenu>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </SideMenu>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={() => <article>home</article>} />
            <Route path="/about" component={() => <p>about</p>} />
            <Route
              component={() => <>I can't find what you're looking for.</>}
            />
          </Switch>
        </main>
      </div>
      <footer>
        <p>
          No copyright; do whatever you'd like with the content of this site.
        </p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
