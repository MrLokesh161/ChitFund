import React from "react";

const IndividualDetails = () => (
  <>
    <h3 className="font-semibold mb-4">Personal Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="First Name*"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        placeholder="Last Name*"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <h3 className="font-semibold mb-4">Contact Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <input
        type="tel"
        placeholder="Phone No"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="tel"
        placeholder="Mobile No*"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="email"
        placeholder="Email Id"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        placeholder="State"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        placeholder="City"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        placeholder="Pincode"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <textarea
      placeholder="Address"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      rows="3"
    ></textarea>
    <h3 className="font-semibold mb-4">Other Details</h3>
    <input
      type="text"
      placeholder="Introductor*"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
    />
    <button className="bg-blue-900 px-3 py-2 text-white rounded-lg">
      Submit
    </button>
  </>
);

export default IndividualDetails;
