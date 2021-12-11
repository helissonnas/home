import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function HighlightCard(props) {
  const high = props[props.language];

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card logo={props.icon} onClick={() => setShowModal(true)} title={high.title}>
          <div className="gray-500">
            {high.vehicle}
          </div>
          <div className="grid grid-cols-2">
            <div>{high.date}</div>
            <div>{high.vehicle}</div>
          </div>
      </Card>
    
      {showModal && 
        <Modal title={high.title} language={props.language} icon={'destaque.png'} onClose={() => setShowModal(false)}>
          <div className="relative p-6 ml-11 flex-auto text-gray-600 text-right">
             {high.vehicle} | {high.date}
          </div>
          <div className="relative p-6 ml-11 flex-auto">
            
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              blablabla
            </p>            
          </div>
        </Modal>}
    </>
  );
}

export default HighlightCard;
