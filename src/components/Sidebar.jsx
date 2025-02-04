import React from "react";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";

function Sidebar() {
  return (
    <ul className="bg-gray-200 text-black h-screen">
        <p className="flex items-center py-3 border-1 border-gray-300"><span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2"><AiOutlineLogout />
        </span>My Company</p>
      <li className=" pl-4 mb-4 flex items-center space-x-4 mt-6">
          <span>
            <LuLayoutDashboard />
          </span>
          <span>Quick Action</span>
      </li>
      <li className=" pl-4 mb-4 flex items-center space-x-4">
          <span>
            <FaUserFriends />
          </span>
          <span>Customers</span>
      </li>
      <li className=" pl-4 mb-4 flex items-center space-x-4">
          <span>
            <FaUsers />
          </span>
          <span>Teams</span>
      </li>
      <li className=" pl-4 mb-4 flex items-center space-x-4">
          <span>
            <LuSettings />
          </span>
          <span>Settings</span>
      </li>
    </ul>
  );
}

export default Sidebar;
