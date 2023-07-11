export default function Paragraph({style,title}){
    return(
        <p className={`${style}`} >
            {title}
        </p>
    )
}