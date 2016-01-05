'use strict';

var React = require('react/addons');

require('./Footer.less');

var Footer = React.createClass({

    render: function () {
		var date = new Date();
		
        return (
            <footer className="secondary-text-color">
                <div className="container">
                    &copy; { date.getFullYear() } Vincent Lo
                </div>
            </footer>
        );
    }
});

module.exports = Footer;

