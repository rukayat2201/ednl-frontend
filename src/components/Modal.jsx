import React from "react";

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Create User
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div>
                <label htmlFor="">First name</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Last name</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Telephone</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Date of birth</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">BVN</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Residential Address</label>
                <textarea type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">State</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">City</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Bank Code</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Account Number</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Company Id</label>
                <input type="text" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">ID card</label>
                <input type="file" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Voters Card</label>
                <input type="file" className="form-control mb-2" />
              </div>
              <div>
                <label htmlFor="">Drivers License</label>
                <input type="file" className="form-control mb-2" />
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
