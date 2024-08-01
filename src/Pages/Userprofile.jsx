import React, { useState } from 'react';
import AppSidebar from '../Component/Sidebar';
import TopBar from '../Component/TopBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaCreditCard,
} from "react-icons/fa";
import MemberTypeSelect from "../Component/MemberTypeSelect";
import FirmDetails from "../Component/FirmDetails";
import IndividualDetails from "../Component/IndividualDetails";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const options = [
    { value: "individual", label: "Individual" },
    { value: "firm", label: "Firm" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      <AppSidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col bg-neutral-50">
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-8">
        <div className=" p-6 font-public-sans">
      <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div style={{ width: 70, height: 70 }}>
              <CircularProgressbar
                value={30}
                text={`${30}%`}
                styles={buildStyles({
                  pathColor: "#3b82f6",
                  textColor: "#3b82f6",
                  textSize: "20px",
                })}
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Edit Your Profile</h2>
              <p className="text-gray-500 text-sm">Complete your profile</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit Your Profile
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-6 mb-6 md:mb-0">
            <div className="text-center mb-6">
              <div className="relative inline-block group">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 border-dotted border-2 border-spacing-10 border-blue-500 rounded-full mx-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <label className="flex flex-col items-center text-white cursor-pointer">
                    <FontAwesomeIcon
                      icon={faCameraRetro}
                      className="text-2xl"
                    />
                    <span className="mt-1">Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Suresh Kumar</h3>
              <p className="text-gray-500">xxx</p>
              <div className="flex justify-center mt-4 space-x-4">
                <FaTwitter className="text-blue-400" />
                <FaFacebookF className="text-blue-600" />
                <FaLinkedin className="text-blue-700" />
              </div>
            </div>
            <div className="flex justify-between text-center mb-6">
              <div>
                <p className="font-semibold">4</p>
                <p className="text-gray-500 text-sm">Chit Groups</p>
              </div>
              <div>
                <p className="font-semibold">40k</p>
                <p className="text-gray-500 text-sm">Loan</p>
              </div>
              <div>
                <p className="font-semibold">Abdul</p>
                <p className="text-gray-500 text-sm">Referred by</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="bg-blue-50 text-blue-600 font-semibold p-2 rounded">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Personal
                Information
              </li>

              <li className="text-gray-600 p-2">
                <FontAwesomeIcon icon={faLock} className="mr-2" /> Change
                Password
              </li>
            </ul>
          </div>
          <div className="w-full md:w-3/4">
            <MemberTypeSelect
              selectedOption={selectedOption}
              handleChange={handleChange}
              options={options}
            />
            {selectedOption && selectedOption.value === "firm" && (
              <FirmDetails />
            )}
            {selectedOption && selectedOption.value === "individual" && (
              <IndividualDetails />
            )}
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;