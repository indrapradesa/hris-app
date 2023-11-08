import React from 'react'

export default function Final({onChange, formValues}) {
  return (
    <div className="w-full max-w-sm">
        <form className="bg-white shadow-md px-24 pt-16 pb-10 mg-8 rounded-md">
            <div className="grid gap-4 place-content-center items-center">
                <h1 className="text-gray-700 pb-8 font-bold text-2xl">Login Info</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="Username" className="block text-gray-700 text-sm font-bold mb-2">Usernama</label>
                <input type="text" id="username" name="username" value={formValues.username} 
                onChange={onChange}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
            <div className="mb-4">
                <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" value={formValues.password} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={onChange} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></input>
            </div>
            <div className="flex justify-items-center content-center items-center">
                <label htmlFor="Terms" className="block text-gray-700 text-sm font-bold mb-2 pr-4">Terms</label>
                <input type="checkbox" id="terms" name="terms" value={formValues.terms} ponChange={onChange}></input>
            </div>
        </form>
    </div>
  )
}
