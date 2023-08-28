import React, { Fragment, useState } from "react";

const EditApp = ({ app }) => {
  const [company, setCompany] = useState(app.company);

  const updateCompany = async (e) => {
    e.preventDefault();
    try {
      const body = { company };
      const response = await fetch(
        `http://localhost:5000/applications/${app.app_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // refresh window to see changes
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${app.app_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${app.app_id}`}
        onClick={() => setCompany(app.company)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Application</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setCompany(app.company)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></input>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateCompany(e)}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setCompany(app.company)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditApp;
