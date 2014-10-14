/** @jsx React.DOM */
jest.dontMock('../react-components/TableHeader.js');

/*
  Test the TableHeader React Component
*/
describe('TableHeader Component Test', function (){
  var React = require('react/addons'),
    TableHeader = require('../react-components/TableHeader'),
    TestUtils = require('react-test-utils'),
    tableHeader;

  describe('Test rendering of TableHeader Component', function () {
    tableHeader = TestUtils.renderIntoDocument(TableHeader(null));

    it('Ensure component can be rendered', function () {
      expect(tableHeader).toBeDefined();
    });

    it('Ensure default properties', function () {
      expect(tableHeader.props.cols).toEqual([]);
    });
  });
});
