'use strict';

var React = require('react/addons');

require('./Footer.less');

var Footer = React.createClass({

    render: function () {
        return (
            <footer className="secondary-text-color">
                <div className="container">
                    &copy; 2015 Vincent Lo
                </div>
            </footer>
        );
    }
});

module.exports = Footer;

