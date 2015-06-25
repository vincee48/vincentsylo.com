'use strict';

var App = require('./App');
var Home = require('./pages/Home');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var content = document.getElementById('content');

var Routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="home" handler={Home} />
    </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, content);
});
