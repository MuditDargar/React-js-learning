import React,{forwardRef} from "react";
function Child(props,ref){
    return(
        <div className="Child">
<h2>this is Child Component </h2> 
<input type='text' ref={ref} />
        </div>
    );
}

export default forwardRef(Child) ;