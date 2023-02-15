import React from "react";

//css
import "../../assets/css/EmpDashboard.css";

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      {/* <a href="/login/emp/uh">
        <button>UPDATE HEALTH</button>
      </a> */}
      <a href="/login/emp/ub">
        <button className="btn btn-danger">UPDATE BLOOD STOCK</button>
      </a>
      <a href="/login/emp/hr">
        <button className="btn btn-danger">HANDLE REQUEST</button>
      </a>
    </div>
  );
};

export default EmpDashBoard;
