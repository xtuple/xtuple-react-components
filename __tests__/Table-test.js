/** @jsx React.DOM */
jest.dontMock('../react-components/Table.js');

/*
  Test the Table React Component
*/
describe('Table component test', function (){
  var React = require('react/addons'),
    Table = require('../react-components/Table'),
    TestUtils = require('react-test-utils'),
    table;

  describe('Test rendering of Table Components', function () {
    table = TestUtils.renderIntoDocument(Table(null));

    it('Ensure component can be rendered', function () {
      expect(table).toBeDefined();
    });

    it('Ensure default properties', function () {
      expect(table.props.title).toBe(Table.defaultTitle);
      expect(table.props.pollInterval).toBe(Table.defaultPoll);
      expect(table.props.cols).toBe(Table.defaultCols);
    });
  });

  describe('Test validation of properties', function () {
    table = TestUtils.renderIntoDocument(Table(null));

    it('Ensure Collection is an object', function () {
      // TODO
    });

    it('Ensure Poll Interval is a number', function () {
      // TODO
    });

    it('Ensure Title is a String', function () {
      // TODO
    });
  });

  describe('Test TableMixins', function () {
    xit('Test getModels', function () {
      // TODO
    });

    xit('Test deleteModel', function () {
      // TODO
    });

    xit('Test editModel', function () {
      // TODO
    });
  });
});
