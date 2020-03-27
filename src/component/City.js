import React ,{} from "react";
// import context from "./../context"

export default function City({ name , activeCity }) {
    // const {handleCity} = useContext(context)
  return <span 
  className={`item ${activeCity === name.eng? `active-city` : ``}`}
   onClick = {()=> alert("در دسترس نمی باشد")}>{name.per}</span>;
}
