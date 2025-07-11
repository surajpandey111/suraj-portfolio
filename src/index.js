import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Timeline from "./Timeline";
import AdminPosts from "./AdminPosts";
import NotFound from "./NotFound";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/about" component={About} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/admin-posts" component={AdminPosts} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);