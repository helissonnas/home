function Input(props) {
  return (
    <div className="w-full mb-4">
      <label className="text-sm" htmlFor={props.name}>{props.label}</label>
      {props.type === 'textarea' ? 
        (<textarea className="w-full bg-gray-700 pl-4 rounded" rows="10" name={props.name} type={props.type} onChange={(e) => {e.preventDefault(); props.onChange && props.onChange(e.target.value)}}/>) : 
        (<input className="w-full h-10 bg-gray-700 pl-4 rounded" name={props.name} type={props.type} onChange={(e) => {e.preventDefault(); props.onChange && props.onChange(e.target.value)}}/>)}
    </div>
  )
}

export default Input;
