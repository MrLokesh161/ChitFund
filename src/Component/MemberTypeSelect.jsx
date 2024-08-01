import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const MemberTypeSelect = ({ selectedOption, handleChange, options }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      paddingRight: "2.5rem",
    }),
  };

  return (
    <div className="mb-6 relative">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        className="shadow  rounded w-full py-2 px-6 text-gray-700 leading-tight outline-none bg-transparent"
        placeholder="Select member type..."
      />
      <FontAwesomeIcon
        icon={faCreditCard}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-700"
      />
    </div>
  );
};

export default MemberTypeSelect;
