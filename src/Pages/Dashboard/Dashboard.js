import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:border-r-2 lg:border-base-200 mr-5">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {user.displayName ? (
              <>
                <li>
                  <Link to="/dashboard/addteacher">Add Teacher</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageteacher">All Teacher</Link>
                </li>
                <li>
                  <Link to="/dashboard/addstudent">Add Student</Link>
                </li>
                <li>
                  <Link to="/dashboard/allstudent">All Student</Link>
                </li>
                <li>
                  <Link to="">Edit Student</Link>
                </li>
                <li>
                  <Link to="">About Student</Link>
                </li>
                <li>
                  <Link to="">All Department</Link>
                </li>
                <li>
                  <Link to="">Add Department</Link>
                </li>
                <li>
                  <Link to="">Edit Department</Link>
                </li>
                <li>
                  <Link to="">Holyday Calendar</Link>
                </li>
                <li>
                  <Link to="">Fees Collection</Link>
                </li>
                <li>
                  <Link to="">Add Fees</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="">All Teacher</Link>
                </li>
                <li>
                  <Link to="">Add Courses</Link>
                </li>
                <li>
                  <Link to="">All Department</Link>
                </li>
                <li>
                  <Link to="">All Student</Link>
                </li>
                <li>
                  <Link to="">Holyday Calendar</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
