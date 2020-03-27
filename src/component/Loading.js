import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loadingCenter">
        <div className="cycle"></div>
        <span className="text">...در حال دریافت</span>
      </div>
    </div>
  );
}
