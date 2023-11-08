import React, { useEffect, useState } from 'react'
import { getBranch, getRole, getLevel } from '../../../../services/Api/employeeApi'

export default function OtherPersonal({onChange, formValues}) {

    const [branch, setBranch] = useState([]);
    const [role, setRole] = useState([]);
    const [level, setLevel] = useState([]);

    const [ktp, setKtp] = useState(null);
    const [kk, setKk] = useState('');
    const [profil, setProfil] = useState('');
    const [cv, setCv] = useState('');

    const [error, setError] = useState(null);

    console.log(ktp);
    
    useEffect(() => {
        getBranch().then((ressults) => {
            setBranch(ressults)
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

    useEffect(() => {
        getRole().then((ressults) => {
            setRole(ressults)
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

    useEffect(() => {
        getLevel().then((ressults) => {
            setLevel(ressults)
            console.log(ressults)
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

  return (
        <>
        Other Information
            <div className="grid grid-rows-1 gap-2">
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="branch_company_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Branch.</p>
                    </div>
                    <div className="p-4 w-full">
                        <select name="branch_company_id" id="branch_company_id" value={formValues.branch} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">--Pilih Branch--</option>
                            {branch.map((branch, index) => {
                            return <option key={branch.id} value={branch.id}>{branch.nama_branch}</option>
                        })}
                        </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="role_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Role.</p>
                    </div>
                    <div className="p-4 w-full">
                        <select name="role_id" id="role_id" value={formValues.role} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">--Pilih Role--</option>
                            {role.map((role, index) => {
                            return <option key={role.id} value={role.id}>{role.nama_jabatan}</option>
                        })}
                        </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="level_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Branch.</p>
                    </div>
                    <div className="p-4 w-full">
                        {/* <select name="level_id" id="level_id" value={formValues.level} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">--Pilih Level--</option>
                            {level.map((level, index) => {
                            return <option key={level.id} value={level.id}>{level.nama_level}</option>
                        })}
                        </select> */}
                        <input type="text" id="level_id" name="level_id" value={formValues.level_id} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Level" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="foto_ktp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Foto KTP 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="file" id="foto_ktp" name="foto_ktp" value={formValues.ktp} onChange={(onChange) => { setKtp(onChange.target.files[0]) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="foto_kk" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Foto KK 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="file" id="foto_kk" name="foto_kk" value={formValues.kk} onChange={(onChange) => setKk('foto_kk', onChange.currentTarget.files[0])} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="foto_profil" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Foto Profile 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="file" id="foto_profil" name="foto_profil" value={formValues.profil} onChange={(onChange) => setProfil('foto_profil', onChange.currentTarget.files[0])} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="file_cv" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File CV
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="file" id="file_cv" name="file_cv" value={formValues.cv} onChange={(onChange) => setCv('file_cv', onChange.currentTarget.files[0])} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
            </div>
        </>
    )
}
