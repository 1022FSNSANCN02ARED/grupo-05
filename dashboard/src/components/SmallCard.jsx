import React from "react";

function SmallCard({ title, value, icon, color }) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card shadow h-100 py-2 bg-${color}`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-white text-uppercase mb-1`}>{title}</div>
              <div className="h5 mb-0 font-weight-bold text-white ">{value}</div>
            </div>
            <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
