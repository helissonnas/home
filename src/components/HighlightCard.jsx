import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Button from './Button';

function HighlightCard(props) {
  const high = props[props.language];

  const [showModal, setShowModal] = useState(false);

  const detailsButton = () =>
    props.link && (
      <a href={props.link} target="_blank">
        <Button>{props.language === 'pt' ? 'Visualizar ' + high.label : 'Go to ' + high.label}</Button>
      </a>
    );

  return (
    <>
      <Card logo={props.icon} onClick={() => setShowModal(true)} title={high.title}>
        <div className="gray-500">{high.vehicle}</div>
        <div className="grid grid-cols-2">
          <div>{high.date}</div>
          <div>{high.vehicle}</div>
        </div>
      </Card>

      {showModal && (
        <Modal title={high.title} language={props.language} icon={'destaque'} onClose={() => setShowModal(false)}>
          <div className="relative p-6 ml-11 flex-auto text-gray-600 text-right">
            {high.vehicle} | {high.date}
          </div>
          <div className="relative ml-11 flex-auto">
            {props.video ? (
              <iframe
                width="90%"
                height="315"
                src={props.link}
                title={high.title}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media"
              ></iframe>
            ) : (
              detailsButton()
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default HighlightCard;
