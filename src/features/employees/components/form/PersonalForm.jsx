import React from 'react'

export default function PersonalForm({onChange, formValues}) {

    const religion = [
      {
          id: "1",
          name: "Islam",
          value: "Islam"
      },
      {
          id: "2",
          name: "Kristen",
          value: "Kristen"
      },
      {
          id: "3",
          name: "Katolik",
          value: "Katolik"
      },
      {
          id: "4",
          name: "Hindu",
          value: "Hindu"
      },
      {
          id: "5",
          name: "Budha",
          value: "Budha"
      },
    ];

    const jenisKelamin = [
        {
            id: "1",
            name: "Laki-Laki",
            value: "Laki-Laki"
        },
        {
            id: "2",
            name: "Perempuan",
            value: "Perempuan"
        },
    ];

    const StatusPerkawinan = [
        {
            id: "1",
            name: "Belum Menikah",
            value: "Belum Menikah"
        },
        {
            id: "2",
            name: "Menikah",
            value: "Menikah"
        },
    ];

  return (
          <>
            <div>
              <h1>Hello</h1>
            </div>
            <div className="grid grid-rows-1 gap-2">
              <div className="flex items-stretch">
                  <div className="p-2 w-1/4">
                    <label htmlFor="nik" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIK
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan NIK.</p>
                  </div>
                  <div className="p-4 w-full">
                    <input type="text" id="nik" name="nik" value={formValues.nik} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NIK" required />
                  </div>
              </div>
              <div className="flex items-stretch">
                  <div className="p-2 w-1/4">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Nama Lengkap Pegawai.</p>
                  </div>
                  <div className="p-4 w-full">
                    <input type="text" id="nama" name="nama" value={formValues.nama} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Lengkap" required />
                  </div>
              </div>
              <div className="flex items-start">
                  <div className="p-2 w-1/5">
                    <label htmlFor="tempat_lahir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat, Tanggal Lahir 
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Jenis Kelamin Pegawai.</p>
                  </div>
                  <div className="p-4 w-1/2">
                    <input type="text" id="tempat_lahir" name="tempat_lahir" value={formValues.tempat_lahir} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tempat Lahir" required />
                  </div>
                  <div className="p-4 w-96">
                    <input type="date" id="tgl_lahir" name="tgl_lahir" value={formValues.tgl_lahir} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
              </div>
              <div className="flex items-stretch">
                  <div className="p-2 w-1/4">
                    <label htmlFor="jenis_kelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin 
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Jenis Kelamin Pegawai.</p>
                  </div>
                  <div className="p-4 w-full">
                      <select name="jenis_kelamin" id="jenis_kelamin" nama="jenis_kelamin" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="">--Pilih Jenis Kelamain--</option>
                         {jenisKelamin.map((jk, index) => {
                        return <option key={jk.id} value={formValues.value}>{jk.name}</option>
                    })}
                     </select>
                  </div>
              </div>
              <div className="flex items-start">
                  <div className="p-2 w-1/4">
                    <label htmlFor="agama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agama 
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pilih Agama.</p>
                  </div>
                  <div className="p-4 w-full">
                  <select name="agama" id="agama" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="" label="Pilih Agama" />
                         {religion.map((religion, index) => {
                        return <option key={religion.id} value={formValues.value}>{religion.name}</option>
                    })}
                     </select>
                  </div>
              </div>
              <div className="flex items-start">
                  <div className="p-2 w-1/4">
                    <label htmlFor="status_perkawinan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Perkawinan 
                      <span className="text-red-500 mx-1">*</span>
                    </label>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Masukan Status Perkawinan Pegawai.</p>
                  </div>
                  <div className="p-4 w-full">
                  <select name="status_perkawinan" id="status_perkawinan" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                         <option value="" label="Pilih Status Perkawinan" />
                         {StatusPerkawinan.map((sp, index) => {
                        return <option key={sp.id} value={formValues.value}>{sp.name}</option>
                    })}
                     </select>
                  </div>
              </div>
            </div>
          </>
    // <div className="step-content">
    //     <div className='mb-3'>
    //             <div>
    //                 <label htmlFor="branch_company_id" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Branch Company ID</label>
    //               </div>
    //         </div>
    //     </div>

        // <form>
        //     <div className="grid gap-4">
        //         <h1 className="text-gray-700 pb-8 font-bold text-2xl">Person</h1>
        //     </div>
        //     <div className="grid grid-cols-2 gap-4">
        //         <div>
        //             <label htmlFor="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lenkap</label>
        //             <input type="text" id="nama" name="nama"  
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama Lengkap" autoComplete="off"></input>
        //         </div>
        //         <div>
        //             <label htmlFor="Nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Panggilan</label>
        //             <input type="text" id="nama" name="nama"  
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama Panggilan" autoComplete="off"></input>
        //         </div>
        //         <div>
        //             <label htmlFor="Jk" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
        //             <select name="jk" id="jk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option selected>--Pilih Jenis Kelamain--</option>
        //                 <option value="L">Laki-Laki</option>
        //                 <option value="P">Perempuan</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="TglLahir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
        //             <input type="date" id="tgl_lahir" name="tgl_lahir" 
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        //         </div>
        //         <div>
        //             <label htmlFor="TempatLahir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat Tanggal Lahir</label>
        //             <input type="text" id="tempat_lahir" name="tempat_lahir" 
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Temapat Lahir" autoComplete="off"></input>
        //         </div>
        //         <div>
        //             <label htmlFor="Agama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agama</label>
        //             <select name="agama" id="agama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option value="" label="Pilih Agama" />
        //                 <option value="Islam" label="Islam" />
        //                 <option value="Kristen" label="Kristen" />
        //                 <option value="Katolik" label="Katolik" />
        //                 <option value="Hindu" label="Hindu" />
        //                 <option value="Budha" label="Budha" />
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="StatusPerkawinan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Perkawinan</label>
        //             <select name="status_perkawinan" id="status_perkawinan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option value="" label="Pilih Status Perkawinan" />
        //                 <option value="Belum Menikah" label="Belum Menikah" />
        //                 <option value="Menikah" label="Menikah" />
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="Alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
        //             <input type="text" id="alamat" name="alamat" 
        //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Alamat Lengkap" autoComplete="off"></input>
        //         </div>
        //         <div>
        //             <label htmlFor="ProvinsiId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provisi</label>
        //             <select name="provinsi_id" id="provinsi_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option selected>--Pilih Provinsi--</option>
        //                 <option value="L">Laki-Laki</option>
        //                 <option value="P">Perempuan</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="KotaId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota/Kabupaten</label>
        //             <select name="kota_id" id="kota_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option selected>--Pilih kota/Kabupatem--</option>
        //                 <option value="L">Laki-Laki</option>
        //                 <option value="P">Perempuan</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="KecamatanId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kecamatan</label>
        //             <select name="kecamatan_id" id="kecamatan_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option selected>--Pilih Kecamatan--</option>
        //                 <option value="L">Laki-Laki</option>
        //                 <option value="P">Perempuan</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label htmlFor="DusunId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dusun</label>
        //             <select name="dusun_id" id="dusun_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
        //                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        //                 <option selected>--Pilih Dusun--</option>
        //                 <option value="L">Laki-Laki</option>
        //                 <option value="P">Perempuan</option>
        //             </select>
        //         </div>
        //     </div>
        // </form>
  )
}
