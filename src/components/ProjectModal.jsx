import PropTypes from 'prop-types';
import Modal from './Modal';

function ProjectModal(props) {
  const { project, language, onClose } = props;
  const content = language === 'pt' ? project.pt : project.en;

  const renderContent = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  return (
    <Modal icon={project.logo} title={content.title} onClose={onClose} language={language}>
      <div className="relative p-6 flex-auto text-gray-300">
        {/* Overview */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-100">
            {language === 'pt' ? 'Visão Geral' : 'Overview'}
          </h2>
          <p className="text-base leading-relaxed">{content.overview}</p>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Sections */}
        {content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">{section.title}</h2>
            
            {section.content && (
              <div className="text-base leading-relaxed mb-4">
                {renderContent(section.content)}
              </div>
            )}

            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-4 ml-4">
                <h3 className="text-xl font-medium mb-2 text-gray-200">{subsection.subtitle}</h3>
                <div className="text-base leading-relaxed">
                  {renderContent(subsection.content)}
                </div>
              </div>
            ))}

            {sectionIndex < content.sections.length - 1 && (
              <hr className="border-gray-700 my-6" />
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
