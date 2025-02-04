import React, {useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Header from "./components/Header";
import { FaInfoCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { FcSettings } from "react-icons/fc";
import { RxDownload } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { MdOutlineGroupAdd } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import CreateUserForm from "./components/CreateUserForm";
import EditUserForm from "./components/EditUserForm";

function App({ customers }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showTableModal = (customer) => {
    setIsTableModalOpen(true);
    setCurrentCustomer(customer);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleTableCancel = () => {
    setIsTableModalOpen(false);
    setCurrentCustomer(null);
  };

  const filteredCustomers = Array.isArray(customers)
    ? customers.filter(
        (customer) =>
          customer.firstname
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          customer.lastname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const showEditModal = (customer) => {
    setCurrentCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleEditModalCancel = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <CreateUserForm
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
        setIsModalOpen={setIsModalOpen}
      />

      {currentCustomer && (
        <EditUserForm
          isTableModalOpen={isTableModalOpen}
          setIsTableModalOpen={setIsTableModalOpen}
          userData={currentCustomer}
          setUserData={setCurrentCustomer}
        />
      )}

      <div className="w-1/6 flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header customers={customers} />
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="text-2xl text-blue-900 font-semibold">Customers</p>
            <p className="text-sm mb-4">Create, edit and manage customers</p>
          </div>
          <div>
            <button
              onClick={showModal}
              className="flex justify-center text-xs items-center bg-blue-800 text-white border-gray-200 border px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800 hover:cursor-pointer"
            >
              <span className="mr-2">
                <MdOutlineGroupAdd />
              </span>
              Add new customer
              <span className="ml-2">
                <IoIosArrowDown />
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-2 p-4">
          <div className="bg-white shadow-md p-4 rounded-lg relative">
            <span className="absolute top-2 right-2">
              <FaInfoCircle />
            </span>
            <p className="mb-4 text-sm  text-gray-600">All customers</p>
            <p className="text-3xl font-semibold">1300</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg relative">
            <span className="absolute top-2 right-2">
              <FaInfoCircle />
            </span>
            <p className="mb-4 text-sm  text-gray-600">Active customers</p>
            <p className="text-3xl font-semibold">1300</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg relative">
            <span className="absolute top-2 right-2">
              <FaInfoCircle />
            </span>
            <p className="mb-4 text-sm  text-gray-600">Overdue customers</p>
            <p className="text-3xl font-semibold">1300</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg relative">
            <span className="absolute top-2 right-2">
              <FaInfoCircle />
            </span>
            <p className="mb-4 text-sm  text-gray-600">Inactive & Dormant</p>
            <p className="text-3xl font-semibold">1300</p>
          </div>
        </div>

        <div className="my-4 flex items-center justify-between text-gray-600 p-4">
          <div className="border-gray-200 border px-4 py-1 flex items-center rounded w-1/3 relative">
            <span className="absolute top-2 left-2">
              <BiSearch />
            </span>
            <input
              className="text-xs py-1 w-full pl-4 hover:cursor-pointer"
              name="search"
              placeholder="Search Customers"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-center space-x-2">
            <button className="flex justify-center text-xs items-center border-gray-200 border px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800  hover:cursor-pointer">
              <span className="mr-2">
                <VscSettings />
              </span>
              Filter
            </button>
            <button className="flex justify-center text-xs items-center border-gray-200 border px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800 hover:cursor-pointer">
              <span className="mr-2">
                <FcSettings />
              </span>
              Edit Columns{" "}
            </button>
            <button className="flex justify-center text-xs items-center border-gray-200 border px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-800 hover:cursor-pointer">
              <span className="mr-2">
                <RxDownload />
              </span>
              Export.csv
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg  overflow-y-scroll p-4">
          <Table
            showTableModal={(customer) => showTableModal(customer)}
            customer={filteredCustomers}
          />
          {isTableModalOpen && (
            <EditUserForm
              isModalOpen={isTableModalOpen}
              onCancel={handleTableCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
