function Button(props) {
  return (
    <button 
      onClick={(e) => { e.preventDefault(); props.onClick && props.onClick(e);}} 
      className="
        transition
        duration-300
        ease-in-out
        p-2
        hover:bg-gray-800
        active:bg-gray-900
        rounded-full">
      {props.children}
    </button>
  )
}

export default Button;