import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function ExperienceCard(props) {
  const comp = props[props.language];

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card logo={props.logo} onClick={() => setShowModal(true)} title={comp.company}>
          <div className="gray-500">
            {comp.role}
          </div>
          <div className="grid grid-cols-2">
            <div>{props.period[0]}{props.period[1] && `-${props.period[1]}`}</div>
          </div>
      </Card>

      {showModal && 
        <Modal title={comp.role} language={props.language} icon={'experiencia.png'} onClose={() => setShowModal(false)}>
          <div className="relative p-6 ml-11 flex-auto text-gray-600 text-right">
             {comp.company} | {props.period[0]}{props.period[1] && `-${props.period[1]}`}
          </div>
          <div className="relative p-6 ml-11 flex-auto">
            
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              {comp.description}
            </p>            
          </div>
        </Modal>}
    </>
  );
}

export default ExperienceCard;
