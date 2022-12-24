import React, { useEffect, useState } from 'react';
import useTeacher from '../../../hooks/useTeaceher';
import SingleTeacher from './SingleTeacher';

const ManageTeacher = () => {
  const [teachers, setTeacher] = useTeacher();
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Designation</th>
        <th>Department</th>
        <th>Action 1</th>
        <th>Action 2</th>
        <th>Action 3</th>
      </tr>
    </thead>
    <tbody>
      

      {
                teachers.map(teacher => <SingleTeacher
                    key={teacher._id}
                    service={teacher}
                >
                </SingleTeacher>)
            }

    </tbody>
  </table>
</div>
    );
};

export default ManageTeacher;