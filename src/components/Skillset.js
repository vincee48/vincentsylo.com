'use strict';

var React = require('react/addons');
var mui = require('material-ui');
var FontIcon = mui.FontIcon;

require('./Skillset.less');

var Skillset = React.createClass({

    render: function () {
        return (
            <div className="Skillset text-center">
                <FontIcon className={this.props.iconClassName}></FontIcon>
                <hr className="accent-color"/>
                <div>
                    <span className="title">{this.props.title}</span>
                </div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Skillset;

