import { useState } from "react";
import { Modal, Button,  message } from "antd";

const CreateUserForm = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
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
    id_card: "",
    voters_card: "",
    drivers_license: "",
  });

  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showTableModal = () => {
    setIsTableModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(
        "https://ednl-production.up.railway.app/api/customers/create",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (response.ok) {
        message.success("Customer created successfully!");
        handleCancel();
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
      title="Create Customer"
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-7">
            <label
              htmlFor="firstname"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="block min-w-9 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.firstname}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="lastname"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.lastname}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="telephone"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Telephone
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.telephone}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="bvn"
              className="block text-sm/6 font-medium text-gray-900"
            >
              BVN
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="bvn"
                  id="bvn"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.bvn}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="dob"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.dob}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="residential_address"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Residential Address
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="residential_address"
                  id="residential_address"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.residential_address}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="state"
              className="block text-sm/6 font-medium text-gray-900"
            >
              State
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.state}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="bank_code"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Bank Code
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="bank_code"
                  id="bank_code"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.bank_code}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="accountnumber"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Account Number
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="accountnumber"
                  id="accountnumber"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.accountnumber}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="company_id"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Company ID
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="company_id"
                  id="company_id"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.company_id}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="city"
              className="block text-sm/6 font-medium text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block min-w-0  py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="country"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="block min-w-0 py-1.5 pr-3 pl-1 text-base text-gray-900  focus:outline-none sm:text-sm/6"
                  required
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="id_card"
              className="block text-sm/6 font-medium text-gray-900"
            >
              ID Card
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="id_card"
                id="id_card"
                className="block w-full py-1.5 px-3 text-base text-gray-900"
                accept="png, jpeg, pdf, jpg"
                onChange={(e) =>
                  setFormData({ ...formData, id_card: e.target.files[0] })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="voters_card"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Voter's Card
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="voters_card"
                id="voters_card"
                className="block w-full py-1.5 px-3 text-base text-gray-900"
                accept="png, jpeg, pdf, jpg"
                onChange={(e) =>
                  setFormData({ ...formData, voters_card: e.target.files[0] })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-7">
            <label
              htmlFor="drivers_license"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Driver's License
            </label>
            <div className="mt-2">
              <input
                type="file"
                name="drivers_license"
                id="drivers_license"
                className="block w-full py-1.5 px-3 text-base text-gray-900"
                accept="png, jpeg, pdf, jpg"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.files[0] })
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-7 flex justify-end mt-4">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              Create User
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUserForm;
