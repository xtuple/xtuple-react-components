/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var ActionButtons = React.createClass({displayName: 'ActionButtons',

    render: function() {
      return (
        React.DOM.td({className: "col-md-1"}, 
          React.DOM.div({className: "btn-group"}, 
            React.DOM.button({type: "button", className: "btn btn-default", onClick: this.props.onEdit}, 
              React.DOM.span({className: "glyphicon glyphicon-pencil"})
            ), 
            React.DOM.button({type: "button", className: "btn btn-default", onClick: this.props.onDelete}, 
              React.DOM.span({className: "glyphicon glyphicon-remove"})
            )
          )
        )
      );
    }
  });

  module.exports = ActionButtons;

}());
