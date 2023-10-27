import React from 'react'

export default function Account({onChange, formValues}) {
  return (
    <div className="w-full max-w-sm">
        <form className="bg-white shadow-md px-24 pt-16 pb-10 mg-8 rounded-md">
            <div className="grid gap-4 place-content-center items-center">
                <h1 className="text-gray-700 pb-8 font-bold text-2xl">Person</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formValues.name} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
            <div className="mb-4">
                <label htmlFor="LastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
        </form>
    </div>
  )
}
