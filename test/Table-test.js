/** @jsx React.DOM */

var TestUtils = React.addons.ReactTestUtils,
  Table = require('../react-components/Table'),


describe('Table Component Test', function (){
  var table;

    before(function () {
      // Render a default table
      table = TestUtils.renderIntoDocument(<Table />);
    });

    it('Check default properties', function () {
      var defaultInterval = 1000;
      expect(table).toBeDefined();
    });
});
