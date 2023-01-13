
function Button(props) {
    return (
        <button className={`purple-button ${props.class}`}>{props.title}</button>
    );
  }
  
  export default Button;
  