import React from "react";

import { Switch, Route } from "react-router-dom";

import Feed from '../../components/Feed';
import Post from '../../components/Post';

const blogRoutes = (props) => (
  <Switch>
    <Route
      exact
      path="/blog"
      component={Feed}
    />
    <Route
      path="/posts/:id"
      component={Post}
    />
  </Switch>
);

export default blogRoutes;