import React from 'react'

export default function Contact({onChange, formValues}) {

    const kDarurat = [
        {
            id: "1",
            name: "Ayah",
            value: "Ayah"
        },
        {
            id: "2",
            name: "Ibu",
            value: "Ibu"
        },
        {
            id: "3",
            name: "Istri",
            value: "Istri"
        },
        {
            id: "4",
            name: "Anak",
            value: "Anak"
        },
        {
            id: "5",
            name: "Sadudara",
            value: "Saudara"
        },
        {
            id: "6",
            name: "Kakek",
            value: "Kakek"
        },
        {
            id: "7",
            name: "Nenek",
            value: "Nenek"
        },
    ];

  return (
        <>
            <div className="grid grid-rows-1 gap-2">
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="text" id="email" name="email" value={formValues.email} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="no_tlpn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepone 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="number" id="no_tlpn" name="no_tlpn" value={formValues.no_tlpn} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="NamaKontakDarurat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Kontak Darurat 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="text" id="nama_kontak_darurat" name="nama_kontak_darurat" value={formValues.nama_kontak_darurat} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="no_tlpn_darurat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Kontak Darurat 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="number" id="no_tlpn_darurat" name="no_tlpn_darurat" value={formValues.no_tlpn_darurat} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label htmlFor="status_kontak_darurat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hubungan Kontak Darurat 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="status_kontak_darurat" id="status_kontak_darurat" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="">--Pilih Hub. Kontak--</option>
                         {kDarurat.map((ed, index) => {
                            return <option key={ed.id} value={formValues.value}>{ed.name}</option>
                        })}
                     </select>
                    </div>
                </div>
            </div>
        </>
    )
}
