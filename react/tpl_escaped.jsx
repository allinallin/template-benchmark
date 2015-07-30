var React = require('react');

module.exports = React.createClass({
  renderProjects: function() {
  	if (this.props.projects) {
      return this.props.projects.map(function(project) {
          return [
              <a href={project.url}>{project.name}</a>,
              <p>{project.description}</p>
          ];
      });
    } else {
      return 'No projects';
    }
  },
  render: function() {
    return (
    	<html>
            <head>
                <title>{this.props.title}</title>
            </head>
            <body>
                <p>{this.props.text}</p>
                {this.renderProjects()}
            </body>
        </html>
    );
  }
});