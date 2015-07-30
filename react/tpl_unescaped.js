var React = require('react');

module.exports = React.createClass({displayName: "Template",
  renderProjects: function() {
  	if (this.props.projects) {
      return this.props.projects.map(function(project) {
          return [
              React.createElement("a", {href: project.url, dangerouslySetInnerHTML: {__html: project.name}}),
              React.createElement("p", {dangerouslySetInnerHTML: {__html: project.description}})
          ];
      });
    } else {
      return 'No projects';
    }
  },
  render: function() {
    return (
    	React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("title", {dangerouslySetInnerHTML: {__html: this.props.title}})
            ),
            React.createElement("body", null,
                React.createElement("p", {dangerouslySetInnerHTML: {__html: this.props.text}}),
                this.renderProjects()
            )
        )
    );
  }
});