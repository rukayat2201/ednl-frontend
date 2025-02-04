import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";

function Table({ showTableModal }) {
  const [customers, setCustomers] = useState([]);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axios.get(
          "https://ednl-production.up.railway.app/api/customers"
        );

        if (
          response &&
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.data)
        ) {
          setCustomers(response.data.data.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setCustomers([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Failed to load customers");
        setLoading(false);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <table className="min-w-full table-auto">
      <thead className="text-gray-500 text-sm">
        <tr className="border-t border-gray-200">
          <th className="px-4 py-2 text-left"></th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Phone Number</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Joined at</th>
          <th className="px-4 py-2 text-left"></th>
        </tr>
      </thead>
      <tbody className="text-xs">
        {customers.map((cust, index) => {
          return (
            <tr className="border-t border-gray-200" key={index}>
              <td className="px-4 py-4">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-4">
                {cust.firstname} {cust.lastname}
              </td>
              <td className="px-4 py-4">{cust.email}</td>
              <td className="px-4 py-4">{cust.telephone}</td>
              <td className="px-4 py-4">
                <span
                  className={`bg-${
                    cust.status === "active" ? "green" : "gray"
                  }-200 px-2 py-1 rounded-full flex items-center justify-center`}
                >
                  {cust.status === "active" ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-4 py-4">
                {new Date(cust.created_at).toLocaleDateString()}
              </td>
              <td
                onClick={() => showTableModal(cust)} 
                className="px-4 py-4 cursor-pointer"
              >
                <MdMoreVert />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
