/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var ActionButtons = React.createClass({

    render: function() {
      return (
        <td className="col-md-1">
          <div className="btn-group">
            <button type="button" className="btn btn-default" onClick={this.props.onEdit}>
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button type="button" className="btn btn-default" onClick={this.props.onDelete}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
        </td>
      );
    }
  });

  module.exports = ActionButtons;

}());
