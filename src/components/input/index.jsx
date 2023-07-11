export default function Input({style,type,name,placeholder}){
    return(
        <input type={type} className={style} placeholder={placeholder} name={name}/>
    )
}