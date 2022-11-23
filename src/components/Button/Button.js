import './Button.css'
const Button = (props) =>{
    return <button onClick={props.fun} style={{color: props.textColor}} className='btn'>{props.children}</button>
}

export default Button