import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUser } from "@fortawesome/free-solid-svg-icons";

const FirmDetails = () => (
  <>
    <h3 className="font-semibold mb-4">Company Details</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="Company Name*"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        placeholder="Registration No*"
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="flex items-center border rounded shadow w-full">
        <input
          type="text"
          placeholder="Pan Card*"
          className="flex-grow py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <FontAwesomeIcon icon={faIdCard} className="text-gray-500 mr-3" />
      </div>
      <div className="flex items-center border rounded shadow w-full">
        <input
          type="text"
          placeholder="GST Number*"
          className="flex-grow py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <FontAwesomeIcon icon={faIdCard} className="text-gray-500 mr-3" />
      </div>
    </div>

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

export default FirmDetails;
