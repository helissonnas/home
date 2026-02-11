import ImageProvider from './ImageProvider';

// Color map for Tailwind classes (to ensure JIT compilation works)
const colorMap = {
  'yellow-400': 'bg-yellow-400 text-yellow-900',
  'blue-300': 'bg-blue-300 text-blue-900',
  'gray-200': 'bg-gray-200 text-gray-600',
  'gray-800': 'bg-gray-800 text-gray-200',
  'gray-900': 'bg-gray-900 text-gray-400',
};

function Card(props) {
  const projectColors = props.project
    ? colorMap[props.project.color] || 'bg-gray-900 text-gray-400'
    : 'bg-gray-900 text-gray-400';

  const projectCard = () => (
    <div className="text-2xl font-semibold flex justify-around items-center h-16 gap-4">
      {props.project.logo && <img src={ImageProvider(props.project.logo)} className="w-12 h-12" alt={props.project.name} />}
      {props.project.name}
    </div>
  );
  const childrenContent = () => (
    <div className="flex flex-col sm:grid sm:grid-cols-5 gap-2">
      <div className="sm:col-start-1 flex justify-center sm:justify-start">
        {props.logo && <img src={ImageProvider(props.logo)} className="w-12 sm:w-16 sm:ml-8" alt="logo" />}
      </div>
      <div className="sm:col-span-4 text-center sm:text-left">
        {props.title && <h1 className="text-lg sm:text-xl text-gray-300 font-medium">{props.title}</h1>}
        <div className="mt-2">{props.children}</div>
      </div>
    </div>
  );

  return (
    <div
      onClick={props.onClick}
      className={`w-${props.width ?? 'full'} ${projectColors} mt-3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl ${
        !props.clearCard && 'hover:scale-105 duration-400 transform transition cursor-pointer'
      }`}
    >
      {props.clearCard ? (
        props.children
      ) : (
        <div className="p-4 sm:p-5">{props.project ? projectCard() : childrenContent()}</div>
      )}
    </div>
  );
}

export default Card;
