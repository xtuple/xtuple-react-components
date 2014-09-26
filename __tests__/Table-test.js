// __tests__/Table-test.js

/** @jsx React.DOM */
jest.dontMock('../components/Table.js');

describe('Table Components', function () {
    React = require('react/addons'),
    Table = require('../components/Table'),
    TestUtils = React.addons.TestUtils;

  it('test default props', function () {
    // Render a default table
    var table = TestUtils.renderIntoDocument(
      Table()
    );

    // Verify the default polling time
    var label = TestUtils.findRenderedDOMComponentWithTag(
      table, 'pollInterval');
    expect(table.getDOMNode().textContent).toEqual(1000);
  });
});
