'use strict';

describe('Skillset', function () {
  var React = require('react/addons');
  var Skillset, component;

  beforeEach(function () {
    Skillset = require('components/Skillset.js');
    component = React.createElement(Skillset);
  });

  it('should create a new instance of Skillset', function () {
    expect(component).toBeDefined();
  });
});
