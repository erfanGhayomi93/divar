import React, { useContext } from "react";
import {Link , useHistory } from "react-router-dom";
import context from "./../../context";
import Gallery from "./Gallery";

export default function DetailProducts({ data }) {
  const { clickedFilter } = useContext(context);
  const history = useHistory();

  // console.log(data);

  return (
    <div className="Detail-products">
      <div className="header-details">
        <span onClick={() => history.goBack()}>
          بازگشت
        </span> 

         <Link onClick={() => clickedFilter("")} to="/">همه آگهی ها</Link>
        
      </div>

      <div className="body-details">
        <div className="item-text">
          <h5>{data.title}</h5>

          <p className="text-muted pt-2">{data.normal_text}</p>

          <div className="button-details d-flex justify-content-between">
            <p className="mb-0">
              <span className="item button-call">دریافت اطلاعات تماس</span>
              <span className="item">شروع چت</span>
            </p>
            <span className="item">نشان دادن</span>
          </div>

          <div className="pt-4 pb-2">
            <p className="table-category">
              <span>دسته بندی</span>
              <span>{data.category}</span>
            </p>
            <p className="table-category">
              <span>محل</span>
              <span>{data.district}</span>
            </p>
            <p className="table-category">
              <span>نوع آگهی</span>
              <span>توافقی</span>
            </p>
            <p className="table-category">
              <span>قیمت</span>
              <span>{data.description}</span>
            </p>
          </div>

          <p className="mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="item-slider">
            <Gallery image = {data.image} />
        </div>
      </div>
    </div>
  );
}
