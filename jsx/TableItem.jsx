/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react'),
    ActionButtons = require('./ActionButtons.jsx');

  var TableItem = React.createClass({

    render: function() {
      var item = this.props.data,
        attributes = this.props.attrs.map(function (col) {
          return (
            <td className="col-md-1">{item.get(col)}</td>
          );
        }, this);

      return (
        <tr>
          {attributes}
        </tr>
      );
    }
  });

  module.exports = TableItem;

}());
