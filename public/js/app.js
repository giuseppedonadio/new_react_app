class Projects extends React.Component {
  render() {
    const projectComponents = Seed.projects.map((project) => (
      <Project
        className='project'
        key={'project-' + project.id}
        id={project.id}
        title={project.title}
        description={project.description}
        url={project.url}
        productImageUrl={project.projectImageUrl}
      />
    ));
    return (
      <div className='ui stackable four column grid'>
        {projectComponents}
      </div>
    );
  }
}
class Project extends React.Component {
  render() {
    return (
      <div className='column'>
        <img className='ui image' src={this.props.productImageUrl} />
      </div>
    );
  }
}

ReactDOM.render(
  <Projects />,
  document.getElementById('content')
);
