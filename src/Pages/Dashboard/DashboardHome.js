import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [teachers, setTeachers] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/teacher')
        .then(res => res.json())
        .then(data => setTeachers(data));
    }, [])
  return (
    <div className="max-w-5xl">
        {/* --->Step 1<--- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className={`card lg:card-side shadow-xl bg-secondary`}>
          {/* <figure className="pl-7">
            <img src={img} alt="Album" />
          </figure> */}
          <div className="card-body text-white">
            <h2 className="card-title text-5xl">{teachers.length}</h2>
            <p>Total Teacher</p>
          </div>
        </div>
        <div
          className={`card lg:card-side shadow-xl bg-primary animate-pulse`}
        >
          {/* <figure className="pl-7">
            <img src={img} alt="Album" />
          </figure> */}
          <div className="card-body text-white">
            <h2 className="card-title text-5xl">943</h2>
            <p>Total Student</p>
          </div>
        </div>
        <div className={`card lg:card-side shadow-xl bg-info`}>
          {/* <figure className="pl-7">
            <img src={img} alt="Album" />
          </figure> */}
          <div className="card-body text-white">
            <h2 className="card-title text-5xl">12</h2>
            <p>Total Admin</p>
          </div>
        </div>
      </div>
          {/* --->Step 2<--- */}
      <div className="mt-5">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://placeimg.com/128/128/people" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
      {/* --->Step 3<--- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm ml-2">deposit</button>
          </div>
        </div>
      </div>
      <div className="stats bg-secondary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm ml-2">deposit</button>
          </div>
        </div>
      </div>
      </div>
      {/* Step-4 */}
      <div className="overflow-x-auto mt-5">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Admin Name</th>
        <th>Title</th>
        <th>Current Role</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
 
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>

      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};

export default DashboardHome;
