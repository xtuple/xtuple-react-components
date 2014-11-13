var ReactTools = require('react-tools');

module.exports = {
  process: function (src) {
    console.log("test test");
    return ReactTools.transform(src);
  }
};
