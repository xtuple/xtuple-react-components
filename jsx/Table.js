/** @jsx React.DOM */

(function () {

  'use strict';

  var React = require('react/addons'),
    TableHeader = require('./TableHeader'),
    TableItem = require('./TableItem'),
    TableMixin = require('../mixins/TableMixin');

  var Table = React.createClass({
    mixins: [TableMixin], // Mixin common table logic

    getDefaultProps: function() {
      return {
        title: 'Default Title',
        pollInterval: 1000
      };
    },

    getInitialState: function () {
      return {data : [], message : ''};
    },

    render: function () {
      var models = this.state.data,
        tableRows = models.map(function (model) {
          return (
            <TableItem
              key={model.get('number')}
              data={model}
              attrs={this.props.cols}
              onDelete={this.deleteModel.bind(this, model)}
              onEdit={this.editModel.bind(this, model)}
            />
          );
        }, this);

      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">{this.props.title}</div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <TableHeader cols={this.props.cols}/>
                <tbody>
                  {tableRows}
                  </tbody>
              </table>
            </div>
          </div>
          <div><strong>{this.state.message}</strong></div>
        </div>
      );
    }
  });

  module.exports = Table;

}());
