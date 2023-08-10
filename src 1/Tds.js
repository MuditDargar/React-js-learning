import  React,{useRef,useEffect} from "react";
function Tds(props){
    const lastval=useRef() ;
    useEffect(()=>{
        lastval.current=props.num ;
    }
    )
    const previousprops=lastval.current
return(
    <div className="Tds">

<h3> current val :- {props.num}</h3>
<h2>previous props {previousprops} </h2>

<h1>Difference : {previousprops - props.num} </h1>
    </div>
)
}
export default Tds ;