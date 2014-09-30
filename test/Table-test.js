/** @jsx React.DOM */

var TestUtils = require("react-test-utils"),
  Table = require('../react-components/Table');

global.document = global.window.document;

describe('Table Component Test', function (){
  var table,
    container = document.createElement("div");

    before(function () {
      // Render a default table
      table = TestUtils.renderIntoDocument(Table());
    });

    it('Check default properties', function () {
      var defaultInterval = 1000;
      expect(table).toBeDefined();
    });
});
