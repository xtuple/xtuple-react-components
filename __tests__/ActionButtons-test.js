/** @jsx React.DOM */
jest.dontMock('../react-components/ActionButtons.js');

/*
  Test the ActionButtons React Component
*/
describe('ActionButtons Component Test', function (){
  var React = require('react/addons'),
    ActionButtons = require('../react-components/ActionButtons'),
    TestUtils = require('react-test-utils'),
    actionButtons;

  describe('Test rendering of ActionButtons Components', function () {
    actionButtons = TestUtils.renderIntoDocument(ActionButtons(null));

    it('Ensure component can be rendered', function () {
      expect(actionButtons).toBeDefined();
    });
  });
});
