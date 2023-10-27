import React from 'react'

export default function Address() {
  return (
    <div>
        Alamat Detail
        <div className="shadow-2xl max-h-fit rounded-lg">
            <div className="grid grid-rows-1 gap-2">
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>--Pilih Provinsi--</option>
                         <option value="L">Laki-Laki</option>
                         <option value="P">Perempuan</option>
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota/Kabupaten 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>--Pilih Provinsi--</option>
                         <option value="L">Laki-Laki</option>
                         <option value="P">Perempuan</option>
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kecamatan 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>--Pilih Provinsi--</option>
                         <option value="L">Laki-Laki</option>
                         <option value="P">Perempuan</option>
                     </select>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dusun 
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                    <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option selected>--Pilih Provinsi--</option>
                         <option value="L">Laki-Laki</option>
                         <option value="P">Perempuan</option>
                     </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
