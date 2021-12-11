function Card(props) {
  const images = require.context('../assets/icons', true);

  const projectCard = () => (<div className={`text-${props.project.textColor} text-2xl font-semibold flex justify-around items-center h-16`}>{props.project.name}</div>);
  const childrenContent = () => (
    <div className="grid grid-cols-5">
      <div className="col-start-1">
        {props.logo && <img src={images(`./${props.logo}`).default} className="ml-8 w-16" alt="logo"/>}
      </div>
      <div className="col-span-4">
        {props.title && (<h1 className="text-xl text-gray-300 font-medium">{props.title}</h1>)}
        <div className="mt-2">
          {props.children}
        </div>
      </div>
    </div>
  )
  
  return (
    <div onClick={props.onClick} className={`w-${props.width ?? 'full'} bg-${props.project ? props.project.color : 'gray-900'} mt-3 text-gray-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl ${!props.clearCard && 'hover:scale-105 duration-400 transform transition cursor-pointer' }`}>
      {props.clearCard ? props.children : (
        <div className="p-5">
          {props.project ? projectCard() : childrenContent()}  
        </div>
      )}
    </div>
  )
}

export default Card;
