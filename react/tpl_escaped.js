var React = require('react');

module.exports = React.createClass({displayName: "Template",
  renderProjects: function() {
  	if (this.props.projects) {
      return this.props.projects.map(function(project) {
          return [
              React.createElement("a", {href: project.url}, project.name),
              React.createElement("p", null, project.description)
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
                React.createElement("title", null, this.props.title)
            ),
            React.createElement("body", null,
                React.createElement("p", null, this.props.text),
                this.renderProjects()
            )
        )
    );
  }
});