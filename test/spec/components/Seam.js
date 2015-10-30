'use strict';

describe('Seam', function () {
  var React = require('react/addons');
  var Seam, component;

  beforeEach(function () {
    Seam = require('components/Seam.js');
    component = React.createElement(Seam);
  });

  it('should create a new instance of Seam', function () {
    expect(component).toBeDefined();
  });
});
