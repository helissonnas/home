import Card from './Card';

function ExperienceCard(props) {
  const comp = props[props.language];
  return (
    <Card logo={props.logo} onClick={props.onClick} title={comp.company}>
        <div className="gray-500">
          {comp.role}
        </div>
        <div className="grid grid-cols-2">
          <div>{props.period[0]}{props.period[1] && `-${props.period[1]}`}</div>
        </div>
    </Card>
  );
}

export default ExperienceCard;
