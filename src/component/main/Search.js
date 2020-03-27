import React ,{useContext} from "react";
import context from "../../context"

export default function Search({handleSearch}) {
  const {data} = useContext(context);
  const placeHolder = data.res.title ? `جستجو در ${data.res.title}` : "جستجو در همه آگهی ها";
  const label = data.res.title ? data.res.title : "همه آگهی ها";

  const handelSearch = (e)=>{
    let value = e.target.value;
    handleSearch(value)
  }

  return (
    <div className="search">
      <form className="form-inline" onSubmit = {(e)=> e.preventDefault()}>
        <div className="input-group-prepend">
          <div className="input-group-text">{label}</div>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            placeholder={placeHolder}
            onChange={handelSearch}
          />
        </div>
      </form>
    </div>
  );
}
