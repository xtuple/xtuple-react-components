/** @jsx React.DOM */

(function () {
	'use strict';

	var React = require('react'),
		Backbone = require('backbone'),
		TableHeader = require('./TableHeader'),
		TableItem = require('./TableItem'),
		TableMixin = require('../mixins/TableMixin');

	var Table = React.createClass({displayName: 'Table',
		mixins: [TableMixin], // Mixin common table logic

		render: function () {
			var models = this.state.data,
				tableRows = models.map(function (model) {
					return (
						TableItem({
							key: model.get('number'),
							data: model,
							attrs: this.props.cols,
							onDelete: this.deleteModel.bind(this, model),
							onEdit: this.editModel.bind(this, model)}
						)
					);
				}, this);

			return (
				React.DOM.div(null,
					React.DOM.div({className: "panel panel-default"},
						React.DOM.div({className: "panel-heading"}, this.props.title),
						React.DOM.div({className: "table-responsive"},
							React.DOM.table({className: "table table-striped table-bordered table-hover"},
								TableHeader({cols: this.props.cols}),
								React.DOM.tbody(null,
									tableRows
								)
							)
						)
					),
					React.DOM.div(null, React.DOM.strong(null, this.state.message))
				)
			);
		}
	});

	module.exports = Table;

}());
