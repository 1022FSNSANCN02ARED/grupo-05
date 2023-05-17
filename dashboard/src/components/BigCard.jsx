import React from "react";

function BigCard({ title, children }) {
  return (
    <div className="container-NPC">
      <div className="col-lg-10 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3 color-NPC">
            <h5 className="m-0 font-weight-bold text-white">{title}</h5>
          </div>
          <div className="card-body color-NPC">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
