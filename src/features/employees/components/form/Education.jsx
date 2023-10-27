import React from 'react'

export default function Education() {
  return (
    <div>
        Education
        <div className="grid grid-rows-1 gap-2">
            <div className="flex items-start">
                <div className="p-2 w-1/4">
                    <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pendidikan Terakhir 
                        <span className="text-red-500 mx-1">*</span>
                    </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                </div>
                <div className="p-4 w-full">
                    <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" label="Pilih Pendidikan Terakhir " />
                        <option value="SD" label="SD" />
                        <option value="SMP" label="SMP" />
                        <option value="SMA" label="SMA" />
                        <option value="D1" label="D1" />
                        <option value="D2" label="D2" />
                        <option value="D3" label="D3" />
                        <option value="D4/S1" label="D4/S1" />
                        <option value="S2" label="S2" />
                        <option value="S3" label="S3" />
                     </select>
                </div>
            </div>
            <div className="flex items-start">
                    <div className="p-2 w-1/4">
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Instansi 
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
                        <label for="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun Lulus
                        <span className="text-red-500 mx-1">*</span>
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Alamat Lengkap Pegawai.</p>
                    </div>
                    <div className="p-4 w-full">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alamat" required />
                    </div>
                </div>
        </div>
    </div>
  )
}
