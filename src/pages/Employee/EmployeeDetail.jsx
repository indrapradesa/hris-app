import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const EmployeeDetail = () => {

  const [open, setOpen] = useState(true);

    return (
      <>
        <div className="flex">
            <Sidebar open={open} setOpen={setOpen} />
          <h1>Employee Detail</h1>
        </div>
      </>
    );
}

export default EmployeeDetail;