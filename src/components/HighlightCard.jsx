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
          <div className="relative px-4 sm:px-6 py-2 flex-auto text-gray-600 text-center sm:text-right text-sm sm:text-base">
            {high.vehicle} | {high.date}
          </div>
          <div className="relative px-4 sm:px-6 py-4 flex-auto">
            {props.video ? (
              <iframe
                className="w-full aspect-video"
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
