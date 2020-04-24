import React from "react";

import { Switch, Route } from "react-router-dom";

import Feed from '../../components/Feed';
import Post from '../../components/Post';

const blogRoutes = () => (
  <Switch>
    <Route exact path="/blog" component={Feed} />
    <Route path="/blog/post" component={Post} />
  </Switch>
);

export default blogRoutes;