import './TextArea.css'

const TextArea =(props)=>{

    const modifiedPlaceholder = `${props.placeholder}...`
    return(
        <div className="text-area">
            <label>{props.label}</label>
            <input placeholder={modifiedPlaceholder}></input>
        </div>
    )
}

export default TextArea