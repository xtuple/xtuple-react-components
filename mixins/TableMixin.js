
(function () {
  'use strict';

  var TableMixin = {
    /*
      Set default value of the model array and message.
    */
    getInitialState: function () {
      return {data : [], message : ''};
    },

    /*
      Fetch the models for the model collection.
    */
    getModels: function () {
      var models = new this.props.Collection(),
        self = this;
      models.fetch({
        success: function (data) {
          self.setState({data: models, message: ''});
        },

        error: function (err) {
          self.setState({
            message: err.responseText + ' ' + err.statusText
          });
        }
      });
    },

    /*
      Destroy this selected model.
    */
    deleteModel: function (model) {
      var self = this;
      model.destroy({
        success: function (result) {
          // refresh the data
          self.setState({data: this.state.data, message: ''});
        },

        error: function (err) {
          self.setState({
            message: err.responseText + ' ' + err.statusText
          });
        }
      });
    },

    /*
      Send model to edit function in parent component.
    */
    editModel: function (model) {
      this.props.onEditForm(model);
    },

    /*
      Get the collection of models for this table.
    */
    componentWillMount: function() {
      this.getModels();
      setInterval(this.getModels, this.props.pollInterval);
    }
  };

  module.exports = TableMixin;

}());
