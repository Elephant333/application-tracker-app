import React, { Fragment, useEffect, useState } from "react";

const ListApps = () => {
  const [apps, setApps] = useState([]);

  const getApps = async () => {
    try {
      const response = await fetch("http://localhost:5000/applications");
      const data = await response.json();
      setApps(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteApp = async (id) => {
    try {
      const deleteApp = await fetch(
        `http://localhost:5000/applications/${id}`,
        {
          method: "DELETE",
        }
      );
      setApps(apps.filter((app) => app.app_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getApps();
  }, []);

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {apps.map((app) => (
            <tr key={app.app_id}>
              <td>{app.company}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteApp(app.app_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListApps;
