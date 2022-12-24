import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TeacherDetailsForTeacher = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/teacher/${teacherId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Teacher Details</h2>
        <p className="font-bold">Name: {teacher.teacherName}</p>
        <p>Designation: {teacher.designation}</p>
        <p>Department: {teacher.department}</p>
        <p>Email: {teacher.teacherEmail}</p>
        <p>Pass code: {teacher.password}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-white"><Link to="/dashboard/viewteacher">Back</Link></button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailsForTeacher;
