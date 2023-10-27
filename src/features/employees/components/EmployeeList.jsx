// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "../../components/Table/Table";
// import { getEmployee } from "../../services/Api/employeeApi";

// const EmployeeList = () => {

//     const [employee, setEmployee] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         getEmployee().then((ressults) => {
//             try{
//                 setEmployee(ressults)
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

//     const columns = React.useMemo(
//         () => [
//           {
//             Header: "NIP Pegawai",
//             accessor: "nip_pgwi",
//           },
//           {
//             Header: "Nama Lengkap",
//             accessor: "nama",
//           },
//           {
//             Header: "Divisi",
//             accessor: "divisi",
//           },
//           {
//             Header: "Jabatan",
//             accessor: "jabatan",
//           },
//         ],
//         []
//       );

//     return (
//         <>
//             <Table columns={columns} data={employee}/>
//         </>
//     );
// }

// export default EmployeeList;