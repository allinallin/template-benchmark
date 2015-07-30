var React = require('react');

module.exports = React.createClass({
  renderProjects: function() {
    if (this.props.projects) {
      return this.props.projects.map(function(project) {
          return [
              <a href={project.url} dangerouslySetInnerHTML={{__html: project.name}}></a>,
              <p dangerouslySetInnerHTML={{__html: project.description}}></p>
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
                <title dangerouslySetInnerHTML={{__html: this.props.title}}></title>
            </head>
            <body>
                <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
                {this.renderProjects()}
            </body>
        </html>
    );
  }
});