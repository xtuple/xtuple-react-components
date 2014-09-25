/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var TableHeader = React.createClass({displayName: 'TableHeader',

    render: function () {
      var header = this.props.cols.map(function (col) {
          return (
            React.DOM.th({className: "col-md-1"}, col)
          );
        }, this);

      return (
        React.DOM.thead(null, 
          React.DOM.tr(null, 
            header
          )
        )
      );
    }
  });

  module.exports = TableHeader;

}());
