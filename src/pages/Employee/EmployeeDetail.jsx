import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const EmployeeDetail = () => {

  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(null);

  function handleUpload() {
    if(!file){
      console.log("No File Upload");
      return;
    }

    console.log(file);
    // const fd = new FormData();
    // fd.append('file', file);
  }

    return (
      <>
        <div className="flex">
            <Sidebar open={open} setOpen={setOpen} />
          <h1>Employee Detail</h1>
          <div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
              <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" name="picture" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
            </div>
            <div>
              <button onClick={ handleUpload }>Submit</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default EmployeeDetail;