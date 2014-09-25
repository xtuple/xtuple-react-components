/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react'),
    ActionButtons = require('./ActionButtons');

  var TableItem = React.createClass({displayName: 'TableItem',

    render: function() {
      var item = this.props.data,
        attributes = this.props.attrs.map(function (col) {
          return (
            React.DOM.td({className: "col-md-1"}, item.get(col))
          );
        }, this);

      return (
        React.DOM.tr(null,
          attributes
        )
      );
    }
  });

  module.exports = TableItem;

}());
