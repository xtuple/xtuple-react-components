/** @jsx React.DOM */
jest.dontMock('../react-components/Table.js');

/*
  Test the Table React Component
*/
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
    var defaultTitle = 'Default Title',
  defaultPoll = 1000;

    expect(table.props.title).toEqual(defaultTitle);
    expect(table.props.pollInterval).toEqual(defaultPoll);
    expect(table.props.cols).not.toBe(null);
  });
});
