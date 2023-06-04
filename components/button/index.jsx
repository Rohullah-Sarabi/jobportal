export default function Button(props){
    return(
        <button className={`${props.style}`}>
            {props.title}
        </button>
    )
}