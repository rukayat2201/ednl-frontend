import React, { useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { PiQuestion } from "react-icons/pi";


function Header( { customers = [] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredCustomers = Array.isArray(customers)
    ? customers.filter(
        (customer) =>
          customer.firstname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <div className="border-2 border-gray-100">
         <div className="my-2 mx-2 flex items-center justify-between text-gray-600">
                  <div className="border-gray-200 border px-4 py-1 flex items-center rounded w-2/3 relative bg-gray-100 md:ml-24">
                    <span className="absolute top-3 left-2">
                      <BiSearch />
                    </span>
                    <input
                      className="text-xs w-full pl-4 py-2 hover:cursor-pointer"
                      placeholder="Search customers details"
                      name="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className=" border border-gray-200 rounded-full p-1 bg-gray-100 hover:bg-gray-200">
                      <PiQuestion className="text-2xl hover:cursor-pointer" />
                    </div>
                    <div className=" border border-gray-200 rounded-full p-1 bg-gray-100 hover:bg-gray-200">
                      <BiBell className="text-2xl hover:cursor-pointer" />
                    </div>
                    <div className=" border border-gray-200 rounded-full p-1 bg-gray-100 hover:bg-gray-200">
                      <span className="text-blue-800 font-bold px-1 hover:cursor-pointer">JA</span>
                    </div>
                  </div>
                </div>
          </div>
  );
}

export default Header;
