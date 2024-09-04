import PropTypes from 'prop-types';
import Card from './Card';

function Section(props) {
  const InstanceCard = props.card ?? Card;

  return (
    <section className="text-gray-200 w-4/5 mt-8">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <ul>
        {props.items.map((it, idx) => (<InstanceCard key={idx+Math.random()} language={props.language} {...it}/>))}
      </ul>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string.isRequired,
  card: PropTypes.elementType,
};

export default Section;
