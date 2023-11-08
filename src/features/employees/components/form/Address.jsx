import React, { useEffect, useState } from 'react'
import { getProvince, getRegenciesByProvince, getDistrictByRegencie, getVillageByDistrict } from '../../../../services/Api/employeeApi';

export default function Address({onChange, formValues}) {

    const [provinces, setProvince] = useState([]);
    const [regencies, setRegencies] = useState([]);
    const [district, setDistrict] = useState([]);
    const [villages, setVillages] = useState([]);
    // const [selectedProvince, setSelectedProvince] = useState('');
    // const [regencie, setRegencie] = useState([]);
    // const [selectedRegencie, setSelectedRegencie] = useState('');
    // const [district, setDistrict] = useState([]);
    // const [selectedDistrict, setSelectedDistrict] = useState('');
    // const [village, setVillage] = useState([]);
    const [selectedVillage, setSelectedVillage] = useState('');

    const [error, setError] = useState(null);

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

      const handleRegencieChange = async (e) => {
            const query = await getRegenciesByProvince(e);
            setRegencies(query);
      }

      const handleDistrictChange = async (e) => {
            const query = await getDistrictByRegencie(e);
            setDistrict(query);

      }

      const handleVillageChange = async (e) => {
            const selectedValVil = e;
            setSelectedVillage(selectedValVil);

            const query = await getVillageByDistrict(e);
            setVillages(query);
      }

      
    // const handleProvinceChange = async (e) => {
    //       const selectedValue = e.target.value;
    //       setSelectedProvince(selectedValue);

    //     const query = await getRegenciesByProvince(selectedValue)
    //     setRegencie(query)
    //   }

    // const handleRegencieChange = async (e) => {
    //     const selectedValReg = e.target.value;
    //     setSelectedRegencie(selectedValReg);
        
    //     const query = await getDistrictByRegencie(selectedValReg)
    //     setDistrict(query)
    //   }

    // const handleDistrictChange = async (e) => {
    //     const selectedValDis = e.target.value;
    //     setSelectedDistrict(selectedValDis);

    //     const query = await getVillageByDistrict(selectedValDis)
    //     setVillage(query)
    //   }

    // const handleVillageChange = async (e) => {
    //     const selectedValVil = e.target.value;
    //     setSelectedVillage(selectedValVil);

    //   }


  return (
        <div>
            Alamat Detail
            <div className="grid grid-rows-1 gap-2">
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="text" id="alamat" name="alamat" value={formValues.alamat} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="provinsi_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="provinsi_id" id="provinsi_id" onChange={(onChange) => handleRegencieChange(onChange.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="1">--Pilih Provinsi--</option>
                         {provinces.map((pronv, index) => {
                        return <option key={pronv.id} value={pronv.id}>{pronv.name}</option>
                    })}
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="kota_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota/Kabupaten 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="kota_id" id="kota_id" onChange={(onChange) => handleDistrictChange(onChange.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option >--Pilih Kota/Kabupaten--</option>
                         {regencies.map((rg, index) => {
                        return <option key={rg.id} value={rg.id}>{rg.name}</option>
                    })}
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="kecamatan_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kecamatan 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="kecamatan_id" id="kecamatan_id" onChange={(onChange) => handleVillageChange(onChange.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option >--Pilih Kecamatan--</option>
                         {district.map((dc, index) => {
                        return <option key={dc.id} value={dc.id}>{dc.name}</option>
                    })}
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="dusun_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dusun 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="dusun_id" id="dusun_id" value={formValues.selectedVillage} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option >--Pilih Dusun--</option>
                         {villages.map((vg, index) => {
                        return <option key={vg.id} value={vg.id}>{vg.name}</option>
                    })}
                     </select>
                    </div>
                </div>
            </div>
        </div>
  )
}
