import React from 'react'

export default function Education({onChange, formValues}) {

    const education = [
        {
            id: "1",
            name: "Sarjana",
            value: "Sarjana"
        },
        {
            id: "2",
            name: "SMK/SMA",
            value: "SMK/SMA"
        },
        {
            id: "3",
            name: "SMP",
            value: "SMP"
        },
        // {
        //     id: "1",
        //     name: "SD",
        //     value: "SD"
        // },
        // {
        //     id: "2",
        //     name: "SMP",
        //     value: "SMP"
        // },
        // {
        //     id: "3",
        //     name: "SMA",
        //     value: "SMA"
        // },
        // {
        //     id: "4",
        //     name: "D1",
        //     value: "D1"
        // },
        // {
        //     id: "5",
        //     name: "D2",
        //     value: "D2"
        // },
        // {
        //     id: "6",
        //     name: "D3",
        //     value: "D3"
        // },
        // {
        //     id: "7",
        //     name: "D4/S1",
        //     value: "D4/S1"
        // },
        // {
        //     id: "8",
        //     name: "S2",
        //     value: "S2"
        // },
        // {
        //     id: "9",
        //     name: "S3",
        //     value: "S3"
        // },
    ];

  return (
        <>
            Education
            <div className="grid grid-rows-1 gap-2">
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="pendidikan_terakhir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pendidikan Terakhir 
                            <span className="text-red-500 mx-1">*</span>
                        </label>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <select name="pendidikan_terakhir" id="pendidikan_terakhir" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" label="Pilih Pendidikan Terakhir " />
                            {education.map((ed, index) => {
                            return <option key={ed.id} value={formValues.id}>{ed.name}</option>
                        })}
                        </select>
                    </div>
                </div>
                <div className="flex items-start">
                        <div className="p-2 w-1/4">
                            <label htmlFor="nama_instansi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Instansi 
                            <span className="text-red-500 mx-1">*</span>
                            </label>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                        </div>
                        <div className="p-4 w-full">
                            <input type="text" id="nama_instansi" name="nama_instansi" value={formValues.nama_instansi} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 w-1/4">
                            <label htmlFor="tahun_lulus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun Lulus
                            <span className="text-red-500 mx-1">*</span>
                            </label>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                        </div>
                        <div className="p-4 w-full">
                            <input type="number" id="tahun_lulus" name="tahun_lulus" value={formValues.tahun_lulus} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                        </div>
                    </div>
            </div>
        </>
    )
}
