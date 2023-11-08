import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import PersonalForm from '../../features/employees/components/form/PersonalForm';
import OtherPersonal from '../../features/employees/components/form/OtherPersonal';
import Address from '../../features/employees/components/form/Address';
import Education from '../../features/employees/components/form/Education';
import Contact from '../../features/employees/components/form/Contact';
import { getProvince, storeEmployee } from "../../services/Api/employeeApi";

function EmployeeCreate() {

    const initialValues = {
        //personality
        branch_company_id: "",
        role_id: "",
        level_id: "",
        nama: "",
        alamat: "",
        provinsi_id: "",
        kota_id: "",
        kecamatan_id: "",
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
        "Personal",
        "Address",
        "Education",
        "Contact",
        "Complate",
    ];

    const [open, setOpen] = useState(true);
    const [values, setValues] = useState(initialValues);
    const [provinces, setProvince] = useState([]);
    const [error, setError] = useState(null);

    const [page, setpage] = useState(0);
    const formlength = formList.length;

    useEffect(() => {
        getProvince().then((ressults) => {
            setProvince(ressults)
        })
        .catch((error) => {
            // Tangani kesalahan di sini
            console.log(error.response.data.message);
            if (error.response && error.response.status === 404) {

                const errorMessage = `Status : ${error.response.statusText}`;
                setError(errorMessage);

            }else{

                const errorMessage = `No Response Received`;
                setError(errorMessage);

            }
        });
      }, []);

    const handlePrev = () => {
        setpage(page === 0 ? formlength - 1 : page - 1);
    };

    const handleNext = () => {
        setpage(page === formlength ? formlength - 1 : page + 1);
    };
    const handleForm = () => {
        switch(page) {
            case 0:{
                return <PersonalForm formValues={values} onChange={onChange}/>
            }
            case 1:{
                return <Address formValues={values} onChange={onChange} />
            }
            case 2:{
                return <Education formValues={values} onChange={onChange} />
            }
            case 3:{
                return <Contact formValues={values} onChange={onChange} />
            }
            case 4:{
                return <OtherPersonal formValues={values} onChange={onChange} />
            }
            default:
                return null;
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setValues({ ...values, [name]:value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
            // storeEmployee(values);
        }, 2000);
        return response;
    }

  return (
    <div className="flex">
        <Sidebar />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-slate-100">
            <div className="shadow-2xl max-h-fit rounded-lg bg-white">
                <div>{handleForm()}
                    <div className="mt-4 flex justify-between items-center">
                        <div className="grid grid-cols-2 gap-4 grid-col-2 place-content-center items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed" 
                                    onClick={handlePrev} disabled={page === 0}>Prev</button>
                        </div>
                            {page === 4 ? (
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
            </div>
        </div>
    </div>
  )
}

export default EmployeeCreate