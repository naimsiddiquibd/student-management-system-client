import React, { useEffect, useState } from 'react';
import useTeacher from '../../../hooks/useTeaceher';
import ViewSingleTeacher from './ViewSingleTeacher';


const ViewTeacher = () => {
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
      </tr>
    </thead>
    <tbody>
      

      {
                teachers.map(teacher => <ViewSingleTeacher
                    key={teacher._id}
                    service={teacher}
                >
                </ViewSingleTeacher>)
            }

    </tbody>
  </table>
</div>
    );
};

export default ViewTeacher;