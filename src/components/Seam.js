'use strict';

var React = require('react/addons');
var mui = require('material-ui');
var FloatingActionButton = mui.FloatingActionButton;

require('./Seam.less');

var Seam = React.createClass({

    render: function () {
        return (
            <div className="Seam text-center">
                <FloatingActionButton iconClassName={this.props.iconClassName} linkButton={true} href={this.props.href} />
            </div>
        );
    }
});

module.exports = Seam;

