import React from "react"
 
export function Button ({handleFormSubmit}) {
    return (
        <>
          <button onClick={handleFormSubmit}> submit </button>  
        </>
    )
}
// props={
//   myname:this.state.myname
// }
 export function Textbox ({textboxname, textboxvalue, handleInputChange}) {
    return (
        <div>
            <input type="text" style={{backgroundColor: "cyan"}} name={textboxname}  value={textboxvalue} 
            onChange={handleInputChange} />
        </div>
    )
}
