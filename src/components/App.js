'use strict';

var React = require('react/addons');
var mui = require('material-ui');
var Colors = mui.Styles.Colors;
var ThemeManager = new mui.Styles.ThemeManager();
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppCanvas = mui.AppCanvas;
var LessColors = require('../styles/mixins/colours.less');

var Header = require('./core/Header');
var Footer = require('./core/Footer');

// CSS
require('normalize.css');
require('../styles/main.less');

var App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    componentWillMount: function() {
        ThemeManager.setPalette({
            primary1Color: Colors.teal500,
            primary2Color: Colors.teal700,
            primary3Color: Colors.teal300,
            accent1Color: Colors.deepOrange500,
            accent2Color: Colors.deepOrange700,
            accent3Color: Colors.deepOrange300
        });
    },
    render: function() {
        document.getElementById('loading-overlay').className = 'toggle-slide';

        return (
            <AppCanvas>
                <Header />

                <div className="content">
                    <RouteHandler />
                </div>

                <Footer />
            </AppCanvas>
        );
    }
});


module.exports = App;
