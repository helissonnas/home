import Card from './Card';

function HighlightCard(props) {
  const high = props[props.language];

  return (
    <Card logo={props.icon} onClick={props.onClick} title={high.title}>
        <div className="gray-500">
          {high.vehicle}
        </div>
        <div className="grid grid-cols-2">
          <div>{high.date}</div>
          <div>{high.vehicle}</div>
        </div>
    </Card>
  );
}

export default HighlightCard;
