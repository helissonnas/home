import Card from './Card';

function Board(props) {
  return (
    <section className="text-gray-200 w-4/5 mt-8">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <div className="grid grid-flow-col grid-cols-3 gap-4">
        {props.items.map(it => (<Card key={it.name} project={it}/>))}
      </div>
    </section>
  )
}

export default Board;