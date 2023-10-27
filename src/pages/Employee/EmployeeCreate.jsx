import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import PersonalForm from '../../features/employees/components/form/PersonalForm';
import OtherPersonal from '../../features/employees/components/form/OtherPersonal';
import Address from '../../features/employees/components/form/Address';
import Education from '../../features/employees/components/form/Education';

function EmployeeCreate() {

    const initialValues = {
        //personality
        branch_company_id: "",
        role_id: "",
        level_id: "",
        nama: "",
        alamat: "",
        dusun_id: "",
        tempat_lahir: "",
        tgl_lahir: "",
        jenis_kelamin: "",
        no_tlpn: "",
        email: "",
        agama: "",
        status_perkawinan: "",
        foto_profil: "",
        //secret
        nik: "",
        no_tlpn_darurat: "",
        nama_kontak_darurat: "",
        status_kontak_darurat: "",
        foto_ktp: "",
        foto_kk: "",
        //education
        pendidikan_terakhir: "",
        nama_instansi: "",
        tahun_lulus: "",
    };

    const formList = [
        "Account Personal",
        "Personal Detail",
        "Complate",
    ];

    const [open, setOpen] = useState(true);
    const [values, setValues] = useState(initialValues);

    const [page, setpage] = useState(0);
    const formlength = formList.length;

    const handlePrev = () => {
        setpage(page === 0 ? formlength - 1 : page - 1);
    };

    const handleNext = () => {
        setpage(page === formlength ? formlength - 1 : page + 1);
    };

    const handleForm = () => {
        switch(page) {
            case 0:{
                return <PersonalForm />
            }
            case 1:{
                return <Address />
            }
            case 2:{
                return <Education />
            }
            case 3:{
                return <OtherPersonal />
            }
            default:
                return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
        }, 2000);
        return response;
    }

  return (
    <div className="flex">
        <Sidebar />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-slate-100">
            {/* <div className="h-auto shadow-xl rounded-md p-7 text-2xl font-semibold flex-1">
                <div className="w-6/12 sm:flex sm:items-center sm:justify-between justify-start">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                            Create New Employee
                        </h2>
                    </div>
                </div> */}
                <div>{handleForm()}
                    <div className="mt-4 flex justify-between items-center">
                        <div className="grid grid-cols-2 gap-4 grid-col-2 place-content-center items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed" 
                                onClick={handlePrev} disabled={page === 0}>Prev</button>
                        </div>
                        {page === 3 ? (
                            <div>
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        ) : (
                            <div>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleNext}>Next</button>
                            </div>
                        )}
                    </div>
                </div>
                {/* <PersonalForm /> */}
                {/* <div className="flex justify-between items-center mt-4">
                    <div className="grid grid-cols-2 gap-4 grid-col-2 place-content-center items-center">
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Next Step
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default EmployeeCreate