import React from 'react'

const ActualPassReset = () => {




    
  return (
    <div className="min-h-screen bg-[#318808] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-black">
              Enter new password
            </label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter new password"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md bg-inherit text-black"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-black">
              Confirm new password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm new password"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md bg-inherit text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#318808] text-white font-bold rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-lavender-300"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default ActualPassReset
