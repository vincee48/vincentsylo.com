'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var mui = require('material-ui');
var AppBar = mui.AppBar;

require('./Header.less');

var Header = React.createClass({

    render: function () {
        return (
            <header className="Header">
                <ul id="header-flexible">
                    <li><a href="https://github.com/vincentsylo"><span className="mdi mdi-github-box circle"></span></a></li>
                    <li><a href="https://au.linkedin.com/in/vincentsylo"><span className="mdi mdi-linkedin-box circle"></span></a></li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;

