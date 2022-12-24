import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTeacher = () => {
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
        <div>
        <div className="card card-compact w-full bg-base-100">
  <div className="card-body">
    <h2 className="card-title">Add a new Teacher</h2>
    <form  className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Teacher's name</span>
          </label>
          <input
            
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Teacher's email</span>
          </label>
          <input
            
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Teacher's pass code</span>
          </label>
          <input
            
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Designation</span>
          </label>
          <input
           
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Department</span>
          </label>
          <input
           
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
       
        <button
          type="submit"
          className="btn btn-outline btn-info w-full max-w-xs mt-5"
        >
          Submit
        </button>
      </form>
  </div>
</div>
        
      
    </div>
    );
};

export default UpdateTeacher;