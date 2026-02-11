import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ProjectModal from './ProjectModal';

function Board(props) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="text-gray-200 w-4/5 mt-8">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <div className="grid grid-flow-col grid-cols-3 gap-4">
        {props.items.map((it) => (
          <Card key={it.name} project={it} onClick={() => handleProjectClick(it)} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          language={props.language}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

Board.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};

export default Board;