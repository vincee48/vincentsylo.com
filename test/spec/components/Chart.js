'use strict';

describe('DataChart', function () {
  var React = require('react/addons');
  var DataChart, component;

  beforeEach(function () {
    DataChart = require('components/Chart.js');
    component = React.createElement(DataChart);
  });

  it('should create a new instance of DataChart', function () {
    expect(component).toBeDefined();
  });
});
