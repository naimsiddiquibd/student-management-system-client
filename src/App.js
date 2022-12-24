import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Navbar from "./Pages/Shared/Navbar";
import Drawer from "./Pages/Shared/Drawer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddTeacher from "./Pages/Dashboard/Admin/AddTeacher";
import ManageTeacher from "./Pages/Dashboard/Admin/ManageTeacher";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import TeacherDetails from "./Pages/Dashboard/Admin/TeacherDetails";
import AddStudent from "./Pages/Dashboard/Admin/AddStudent";
import AllStudent from "./Pages/Dashboard/Admin/AllStudent";
import UpdateTeacher from "./Pages/Dashboard/Admin/UpdateTeacher";
import AddDepartment from "./Pages/Dashboard/Admin/AddDepartment";
import AllDepartment from "./Pages/Dashboard/Admin/AllDepartment";
import AddCourse from "./Pages/Dashboard/Teacher/AddCourse";
import ViewTeacher from "./Pages/Dashboard/Teacher/ViewTeacher";
import ViewDepartment from "./Pages/Dashboard/Teacher/ViewDepartment";
import ViewStudent from "./Pages/Dashboard/Teacher/ViewStudent";
import TeacherDetailsForTeacher from "./Pages/Dashboard/Teacher/TeacherDetailsForTeacher";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<RequireAuth><DashboardHome /></RequireAuth>} />
          <Route path="addteacher" element={<RequireAuth><AddTeacher /></RequireAuth>} />
          <Route path="manageteacher" element={<RequireAuth><ManageTeacher /></RequireAuth>} />
          <Route path="addstudent" element={<RequireAuth><AddStudent /></RequireAuth>} />
          <Route path="allstudent" element={<RequireAuth><AllStudent /></RequireAuth>} />
          <Route path="adddepartment" element={<RequireAuth><AddDepartment /></RequireAuth>} />

          <Route path="addcourse" element={<RequireAuth><AddCourse /></RequireAuth>} />
          <Route path="viewteacher" element={<RequireAuth><ViewTeacher /></RequireAuth>} />
          <Route path="viewdepartment" element={<RequireAuth><ViewDepartment /></RequireAuth>} />
          <Route path="viewstudent" element={<RequireAuth><ViewStudent /></RequireAuth>} />

          <Route path="alldepartment" element={<RequireAuth><AllDepartment /></RequireAuth>} />
          <Route path="teacher/:teacherId" element={<RequireAuth><TeacherDetails /></RequireAuth>}></Route>
          <Route path="teacher2/:teacherId" element={<RequireAuth><TeacherDetailsForTeacher /></RequireAuth>}></Route>
          <Route path="updateteacher/:teacherId" element={<RequireAuth><UpdateTeacher /></RequireAuth>}></Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        

      </Routes>

    </div>
  );
}

export default App;
