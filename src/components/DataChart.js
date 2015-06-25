'use strict';

var React = require('react/addons');

require('./DataChart.less');

var DataChart = React.createClass({

    getInitialState: function() {
        return {
            context: null
        };
    },
    componentDidMount: function() {
        this.setState({
            context: React.findDOMNode(this.refs.context).getContext('2d')
        });
    },
    render: function () {

        if (this.state.context !== null) {
            new Chart(this.state.context).Pie(this.props.data, {
                animateScale: true
            });
        }
        return (
            <div className="text-center">
                <canvas ref="context"></canvas>
            </div>
        );
    }
});

module.exports = DataChart;

