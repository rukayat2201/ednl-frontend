import { useState, useEffect } from "react";
import { Modal, Button, message, Spin } from "antd";
import axios from "axios";

const EditUserForm = ({
  isTableModalOpen,
  setIsTableModalOpen,
  userData,
  setUserData,
}) => {
  const handleTableCancel = () => {
    setIsTableModalOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    userData || {
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      bvn: "",
      dob: "",
      residential_address: "",
      state: "",
      bank_code: "",
      accountnumber: "",
      company_id: "",
      city: "",
      country: "",
      id_card: "",
      voters_card: "",
      drivers_license: "",
      status: "",
    }
  );

  useEffect(() => {
    setFormData(
      userData || {
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        bvn: "",
        dob: "",
        residential_address: "",
        state: "",
        bank_code: "",
        accountnumber: "",
        company_id: "",
        city: "",
        country: "",
        id_card: "",
        voters_card: "",
        drivers_license: "",
        status: "",
      }
    );
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);

    if (!formData.firstname || !formData.lastname || !formData.email) {
      message.error("First name, Last name, and Email are required.");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    console.log("Form Data to send:", formDataToSend); // Inspect what you're sending

    Object.keys(formData).forEach((key) => {
      if (formData[key]) formDataToSend.append(key, formData[key]);
    });
    if (formData.id_card) formDataToSend.append("id_card", formData.id_card);
    if (formData.voters_card)
      formDataToSend.append("voters_card", formData.voters_card);
    if (formData.drivers_license)
      formDataToSend.append("drivers_license", formData.drivers_license);

    try {
      const response = await axios.put(
        `https://ednl-production.up.railway.app/api/customers/update/${formData.id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (response.ok) {
        message.success("Customer updated successfully!");
        setIsTableModalOpen(false);
      } else {
        message.error(data.message || "Something went wrong");
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Edit Customer"
      open={isTableModalOpen}
      onCancel={handleTableCancel}
      footer={null}
    >
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {[
            { label: "First Name", name: "firstname", type: "text" },
            { label: "Last Name", name: "lastname", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Telephone", name: "telephone", type: "tel" },
            { label: "BVN", name: "bvn", type: "tel" },
            { label: "Date of Birth", name: "dob", type: "date" },
            {
              label: "Residential Address",
              name: "residential_address",
              type: "text",
            },
            { label: "State", name: "state", type: "text" },
            { label: "Bank Code", name: "bank_code", type: "text" },
            { label: "Account Number", name: "accountnumber", type: "tel" },
            { label: "Company ID", name: "company_id", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "Country", name: "country", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="sm:col-span-7" key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-900"
              >
                {label}
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                  <input
                    type={type}
                    name={name}
                    id={name}
                    className="block w-full py-1.5 text-base text-gray-900 focus:outline-none sm:text-sm"
                    value={formData[name] || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="sm:col-span-7">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-900"
            >
              Status
            </label>
            <div className="mt-2">
              <select
                name="status"
                id="status"
                value={formData.status || ""}
                onChange={handleChange}
                className="block w-full py-1.5 text-base text-gray-900 focus:outline-none sm:text-sm"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="dormant">Dormant</option>
              </select>
            </div>
          </div>

          {["id_card", "voters_card", "drivers_license"].map((fileName) => (
            <div className="sm:col-span-7" key={fileName}>
              <label
                htmlFor={fileName}
                className="block text-sm font-medium text-gray-900"
              >
                {fileName.replace("_", " ").toUpperCase()}
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name={fileName}
                  id={fileName}
                  className="block w-full py-1.5 text-base text-gray-900 focus:outline-none sm:text-sm"
                  onChange={handleChange}
                  accept="png, jpg, jpeg, pdf"
                />
              </div>
            </div>
          ))}

          <div className="sm:col-span-7 flex justify-end">
            <Button onClick={handleTableCancel}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              className="ml-4"
            >
              {loading ? <Spin size="small" /> : "Edit"}
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditUserForm;
