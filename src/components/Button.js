function Button(props) {
  return (
    <button 
      onClick={props.onClick} 
      type={props.type ?? 'button'}
      className="
        transition
        duration-300
        ease-in-out
        p-2
        pl-8
        pr-8
        hover:bg-gray-800
        active:bg-gray-900
        rounded-full">
      {props.children}
    </button>
  )
}

export default Button;