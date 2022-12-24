import React from "react";
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";

const AddTeacher = () => {
  const { register, handleSubmit, reset} = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
] = useCreateUserWithEmailAndPassword(auth);
  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.teacherEmail, data.password);
        console.log('Singup o sathe hoye gese!');
    const url = `http://localhost:5000/teacher`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
            toast('Congress!!! Your have added a new teacher!');
            reset();
          }
      });
  };
  return (
    <div>
        <div className="card card-compact w-full bg-base-100">
  <div className="card-body">
    <h2 className="card-title">Add a new Teacher</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Teacher's name</span>
          </label>
          <input
            {...register("teacherName", { required: true, maxLength: 50 })}
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
            {...register("teacherEmail", { required: true, maxLength: 50 })}
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
            {...register("password", { required: true, maxLength: 50 })}
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
            {...register("designation", { required: true, maxLength: 50 })}
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
            {...register("department", { required: true, maxLength: 50 })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
        <ToastContainer />
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

export default AddTeacher;
