import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table/Table";
import { getEmployee, getDivision, getJobTitle } from "../../services/Api/employeeApi";

const EmployeeShow = () => {

    const [open, setOpen] = useState(true);
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [divisionOptions, setDivisionOptions] = useState([]);
    const [filterDivisi, setFilterDivisi] = useState("");
    const [jobTitleOptions, setJobTitleOptions] = useState([]);
    const [filterJobTitle, setFilterJobTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEmployee().then((ressults) => {
            setEmployee(ressults)
            setLoading(false);

        })
        .catch((error) => {
            // Tangani kesalahan di sini
            console.log(error.response.data.message);
            if (error.response && error.response.status === 404) {

                const errorMessage = `Status : ${error.response.statusText}`;
                setError(errorMessage);
                setLoading(false);

            }else{

                const errorMessage = `No Response Received`;
                setError(errorMessage);
                setLoading(false);

            }
        });
      }, []);


    useEffect(() => {
        getDivision().then((ressults) => {
            try{
                setDivisionOptions(ressults)
            }catch (error) {
                if (error.response && error.response.status === 404) {
                    // Tangani kesalahan "API not found"
                    setError('API not found. Please check the URL.');
                  } else {
                    // Tangani kesalahan lainnya
                    setError('An error occurred. Please try again later.');
                  }
            }

        })
      }, []);

    useEffect(() => {
        getJobTitle().then((ressults) => {
            try{
                setJobTitleOptions(ressults)
            }catch (error) {
                if (error.response && error.response.status === 404) {
                    // Tangani kesalahan "API not found"
                    setError('API not found. Please check the URL.');
                  } else {
                    // Tangani kesalahan lainnya
                    setError('An error occurred. Please try again later.');
                  }
            }

        })
      }, []);

    const filteredData = employee.filter(
        (item) =>
          (filterDivisi === "" || item.divisi === filterDivisi) &&
          (filterJobTitle === "" || item.jabatan === filterJobTitle) &&
          item.nama.toLowerCase().includes(searchValue.toLowerCase())
      );

    const columns = React.useMemo(
        () => [
          {
            Header: "NIP Pegawai",
            accessor: "nip_pgwi",
          },
          {
            Header: "Nama Lengkap",
            accessor: "nama",
          },
          {
            Header: "Divisi",
            accessor: "divisi",
          },
          {
            Header: "Jabatan",
            accessor: "jabatan",
          },
        ],
        []
      );

    return (
        <div className="flex">
            <Sidebar open={open} setOpen={setOpen} />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                {/* <HeaderTable /> */}
                <div className="flex item-center">
                    <div className="w-6/12 sm:flex sm:items-center sm:justify-between justify-start">
                    <div>
                        <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                            Employee
                        </h2>
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                            Employee
                        </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        Employee Data for the last 2 years ago
                        </p>
                    </div>
                    </div>
                    <div className="w-6/12 text-right ">
                    {/* <Link to="/create" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create New Employee</Link> */}
                    {/* <button onClick={()=>setShowModal(true)} className='flex items-center text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        <AiOutlinePlusCircle className='w-5 h-5 mr-3'/>
                        Create Division
                        </button>   */}
                    </div>
                </div>
                <div className="flex w-full items-center mt-4">
                    <div className="w-6/12 flex">
                        <select
                        className="text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        value={filterDivisi}
                        onChange={(e) => setFilterDivisi(e.target.value)}
                        >
                        <option value="">Semua Divisi</option>
                        {divisionOptions.map((divisi, index) => (
                            <option key={index} value={divisi.nama_divisi}>
                            {divisi.nama_divisi}
                            </option>
                        ))}
                        </select>
                        <select
                        className="text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-70"
                        value={filterJobTitle}
                        onChange={(e) => setFilterJobTitle(e.target.value)}
                        >
                        <option value="">Semua Job Title</option>
                        {jobTitleOptions.map((jobTitle, index) => (
                            <option key={index} value={jobTitle.nama_jabatan}>
                            {jobTitle.nama_jabatan}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="w-6/12 flex justify-end ">
                        <input
                        type="text"
                        placeholder="Cari..."
                        value={searchValue}
                        className="block w-7/12 p-2 pl-5 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                {loading ? (
                        <p>Mengambil data employee...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : employee ? (
                        <Table columns={columns} data={filteredData} />
                    ) : (
                        <p>Data employee tidak ditemukan.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmployeeShow;