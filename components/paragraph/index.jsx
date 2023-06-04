export default function Paragraph(props){
    return(
        <p className={`${props.style}`}>
            {props.title}
        </p>
    )
}