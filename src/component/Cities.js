import React ,{useContext} from "react";
import { MdClose } from "react-icons/md";
import City from "./City";
import context from "./../context"

const cities = [{per : "تهران" , eng : "tehran"} , {per :"مشهد" , eng:"mashhad"} , {per :"کرج", eng : "karaj"}, {per : "شیراز", eng : "shiraz"}, {per : "اصفهان", eng : "isfahan"}, {per :"اهواز" , eng : "ahvaz"}, {per : "تبریز" , eng : "tabriz"}, {per :"کرمانشاه" , eng : "kermanshah"}, {per :"قم", eng : "qom"}, {per :"رشت" ,eng : "rasht"}]

export default function Cities({activeCity}) {
  const { handleCity } = useContext(context);
  return (
    <div className="bg-modal">
      <div className="modal-city">
        <div className="d-flex justify-content-between">
          <span className ="close p-2" onClick = {()=>handleCity(false)}>
            <MdClose />
          </span>
          <h5 className="text-right p-2">انتخاب شهر</h5>
        </div>
        <div className="pt-5">
            <p className="text-right font-weight-bold">شهرهای پر بازدید</p>
            <div className="cities">
            {
               cities.map((city,ind)=><City key={ind} name={city} activeCity={activeCity}/>)
            } 
            </div>
        </div>
      </div>
    </div>
  );
}