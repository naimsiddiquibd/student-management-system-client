import React from "react";

const AllDepartment = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Department Name</th>
            <th>Department Code</th>
            <th>Faculty</th>
            <th>Action 1</th>
            <th>Action 2</th>
            <th>Action 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>SWE</td>
            <td>4563</td>
            <td>FSIT</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
          <th>2</th>
            <td>CSE</td>
            <td>4590</td>
            <td>FSIT</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
          <th>3</th>
            <td>EEE</td>
            <td>4123</td>
            <td>FE</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>SE</td>
            <td>4353</td>
            <td>FE</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>Max</td>
            <td>4636</td>
            <td>FSIT</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>TSD</td>
            <td>5745</td>
            <td>FSIT</td>
            <td>
              {" "}
              <button className="btn btn-sm btn-success text-white">
                View
              </button>
            </td>
            <td>
              {" "}
              <button className="btn btn-sm btn-info text-white">Edit</button>
            </td>
            <td>
              <button className="btn btn-sm btn-error text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllDepartment;
