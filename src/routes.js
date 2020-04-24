import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from './pages/Index';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';
import Blog from './pages/Blog';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route path="/sobre" component={Sobre} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/contato" component={Contato} />
		<Route path="/blog" component={Blog} />
	</Switch>
);

export default Routes;