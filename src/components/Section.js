function Section(props) {
  return (
    <section className="text-gray-200">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <li>
        {props.items.map(it => (<ul>{it}</ul>))}
      </li>
    </section>
  )
}

export default Section;
