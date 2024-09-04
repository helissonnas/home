import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function EducationCard(props) {
  const edu = props[props.language];

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card logo={props.logo} onClick={() => setShowModal(true)} title={edu.degree}>
        <div className="gray-500">{edu.entity}</div>
        <div className="grid grid-cols-2">
          <div>
            {props.period[0]}
            {props.period[1] && `-${props.period[1]}`}
          </div>
          <div>{edu.place}</div>
        </div>
      </Card>

      {showModal && (
        <Modal title={edu.degree} language={props.language} icon={'formacao'} onClose={() => setShowModal(false)}>
          <div className="relative p-6 ml-11 flex-auto text-gray-600 text-right">
            {`${edu.entity} | ${props.period[0]} - ${props.period[1]}`}
          </div>
          <div className="relative max-w-[90%] p-6 ml-11 flex-auto">
            <p className="text-gray-300 break-words text-lg leading-relaxed text-justify">{edu.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
}

EducationCard.propTypes = {
  language: PropTypes.string,
  logo: PropTypes.string,
  period: PropTypes.arrayOf(PropTypes.number).isRequired,
  [PropTypes.string]: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    entity: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default EducationCard;
