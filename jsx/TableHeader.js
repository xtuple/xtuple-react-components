/** @jsx React.DOM */

(function () {

  'use strict';

  var React = require('react/addons');

  var TableHeader = React.createClass({

    /*
      Validation to ensure that the properties sent from the
        parent component is the correct type.
    */
    propTypes: {
      data: React.PropTypes.array
    },

    getDefaultProps: function () {
      return {
        cols: []
      };
    },

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
