import React from "react";
import { useNavigate } from "react-router-dom";
import useTeacher from "../../../hooks/useTeaceher";


const SingleTeacher = ({ service }) => {
  const { _id, teacherName, email, designation, department, } = service;
  const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/dashboard/teacher/${id}`);
    }
    const navigateToEditTeacher = id =>{
        navigate(`/dashboard/updateteacher/${id}`);
    }
  


    const [teachers, setTeacher] = useTeacher();
    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure?');
      if(proceed){
          const url = `http://localhost:5000/teacher/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = teachers.filter(teacher => teacher._id !== id);
              setTeacher(remaining);
              window.location.reload();
          })
      }
  }

  return (
    <tr>
      <th>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </th>
      <td>{teacherName}</td>
      <td>{designation}</td>
      <td>{department}</td>
      <td>
        <button onClick={() => navigateToServiceDetail(_id)} className="btn btn-sm btn-success text-white">View</button>
      </td>
      <td>
        <button onClick={() => navigateToEditTeacher(_id)} className="btn btn-sm btn-info text-white">Edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(service._id)} className="btn btn-sm btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default SingleTeacher;
