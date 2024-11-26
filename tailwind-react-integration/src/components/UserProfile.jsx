import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg user-profile">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto"
      />
      <h1 className="text-xl md:text-xl text-blue-800 my-4 text-center">John Doe</h1>
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
