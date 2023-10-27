import React from 'react'

export default function Detail({onChange, formValues, option }) {
  return (
    <div className="w-full max-w-sm">
        <form className="bg-white shadow-md px-24 pt-16 pb-10 mg-8 rounded-md">
            <div className="grid gap-4 place-content-center items-center">
                <h1 className="text-gray-700 pb-8 font-bold text-2xl">Other Info</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="Address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input type="text" id="address" name="address" value={formValues.address} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
            <div className="mb-4">
                <label htmlFor="City" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <select type="text" id="city" name="city" onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
                    {option.map((city, index) => {
                        return <option key={city.id} value={formValues.id}>{city.name}</option>
                    })}
                    </select>
            </div>
            <div className="mb-4">
                <label htmlFor="Zip" className="block text-gray-700 text-sm font-bold mb-2">Zip</label>
                <input type="text" id="zip" name="zip" value={formValues.zip} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
        </form>
    </div>
  )
}
