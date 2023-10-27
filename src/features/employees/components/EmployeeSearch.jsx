// import React, { useEffect, useState } from "react";
// import { getDivision, getJobTitle } from "../../services/Api/employeeApi";


// const EmployeeSearch = ({ searchValue, onSearchValue }) => {

//     const [error, setError] = useState(null);
//     // const [searchValue, setSearchValue] = useState("");
//     const [divisionOptions, setDivisionOptions] = useState([]);
//     const [filterDivisi, setFilterDivisi] = useState("");
//     const [jobTitleOptions, setJobTitleOptions] = useState([]);
//     const [filterJobTitle, setFilterJobTitle] = useState("");

//     useEffect(() => {
//         getDivision().then((ressults) => {
//             try{
//                 setDivisionOptions(ressults)
//             }catch (error) {
//                 if (error.response && error.response.status === 404) {
//                     // Tangani kesalahan "API not found"
//                     setError('API not found. Please check the URL.');
//                   } else {
//                     // Tangani kesalahan lainnya
//                     setError('An error occurred. Please try again later.');
//                   }
//             }

//         })
//       }, []);

//     useEffect(() => {
//         getJobTitle().then((ressults) => {
//             try{
//                 setJobTitleOptions(ressults)
//             }catch (error) {
//                 if (error.response && error.response.status === 404) {
//                     // Tangani kesalahan "API not found"
//                     setError('API not found. Please check the URL.');
//                   } else {
//                     // Tangani kesalahan lainnya
//                     setError('An error occurred. Please try again later.');
//                   }
//             }

//         })
//       }, []);

//     return(
//         <>
//             <div className="w-6/12 flex">
//                 <select
//                     className="text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//                     value={filterDivisi}
//                     onChange={(e) => setFilterDivisi(e.target.value)}
//                     >
//                     <option value="">Semua Divisi</option>
//                         {divisionOptions.map((divisi, index) => (
//                     <option key={index} value={divisi.nama_divisi}>
//                                 {divisi.nama_divisi}
//                                 </option>
//                     ))}
//                 </select>
//                 <select
//                     className="text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-70"
//                     value={filterJobTitle}
//                     onChange={(e) => setFilterJobTitle(e.target.value)}
//                     >
//                     <option value="">Semua Job Title</option>
//                         {jobTitleOptions.map((jobTitle, index) => (
//                     <option key={index} value={jobTitle.nama_jabatan}>
//                                 {jobTitle.nama_jabatan}
//                                 </option>
//                         ))}
//                 </select>
//             </div>
//                 <div className="w-6/12 flex justify-end ">
//                     <input
//                         type="text"
//                         placeholder="Cari..."
//                         value={searchValue}
//                         className="block w-7/12 p-2 pl-5 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         onChange={(e) => onSearchValue(e.target.value)}
//                         />
//                 </div>
//         </>
//     );
// }

// export default EmployeeSearch;