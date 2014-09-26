/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var TableHeader = React.createClass({

    render: function () {
      var header = this.props.cols.map(function (col) {
          return (
            <th className="col-md-1">{col}</th>
          );
        }, this);

      return (
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
      );
    }
  });

  module.exports = TableHeader;

}());
