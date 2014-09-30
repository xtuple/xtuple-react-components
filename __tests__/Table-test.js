/** @jsx React.DOM */
jest.dontMock('../react-components/Table.js');

describe('Table Component Test', function (){
  var React = require('react/addons'),
    Table = require('../react-components/Table.js'),
    TestUtils = require('react-test-utils'),
    table;
  /* Render a table with default props */
  it('Ensure component can be rendered', function () {
    // TODO: use jsx and test preprocessor
    table = TestUtils.renderIntoDocument(Table(null));
    expect(table).toBeDefined();
  });

  it('Ensure default properties', function () {
    expect(table.props.title).toBe('Default Title');
    expect(table.props.pollInterval).toBe(1000);
  });
});
