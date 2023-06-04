export default function IconContent(props){
    return(
        <div className="row text-start text-md">
          <strong className="block p-1 text-start">
            100
          </strong>
          <span className="p-1">{props.title}</span>
        </div>
    )
}