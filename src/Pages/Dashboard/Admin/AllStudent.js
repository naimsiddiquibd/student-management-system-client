import React from 'react';

const AllStudent = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
    <tr>
        <th></th>
        <th>Student Name</th>
        <th>Department</th>
        <th>Batch</th>
        <th>Action 1</th>
        <th>Action 2</th>
        <th>Action 3</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>1</th>
        <td>Dustin</td>
        <td>SWE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>
      <tr>
        <th>2</th>
        <td>Mike</td>
        <td>CSE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>
      <tr>
        <th>3</th>
        <td>Lucas</td>
        <td>EEE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>
      <tr>
        <th>4</th>
        <td>Steve</td>
        <td>SWE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>
      <tr>
        <th>5</th>
        <td>Max</td>
        <td>CSE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>
      <tr>
        <th>6</th>
        <td>Max</td>
        <td>SWE</td>
        <td>Blue</td>
        <td> <button className="btn btn-sm btn-success text-white">View</button></td>
        <td> <button className="btn btn-sm btn-info text-white">Edit</button></td>
        <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
      </tr>

    

     
     
      
      
      
      
     
      
    </tbody>
  </table>
</div>
    );
};

export default AllStudent;