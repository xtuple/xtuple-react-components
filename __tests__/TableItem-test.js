/** @jsx React.DOM */
jest.dontMock('../react-components/TableItem.js');

/*
  Test the TableItem React Component
*/
describe('TableItem Component Test', function (){
  var React = require('react/addons'),
    TableItem = require('../react-components/TableItem'),
    TestUtils = require('react-test-utils'),
    tableItem;

  describe('Test rendering of TableItem Component', function () {
    tableItem = TestUtils.renderIntoDocument(TableItem(null));

    it('Ensure component can be rendered', function () {
      expect(tableItem).toBeDefined();
    });

    it('Ensure default properties', function () {
      expect(tableItem.props.data).toEqual({});
    });
  });
});
