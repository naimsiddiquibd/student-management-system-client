import { useEffect, useState } from "react";

const useTeacher = () =>{
    const [teachers, setTeacher] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/teacher')
        .then(res => res.json())
        .then(data => setTeacher(data));
    }, []);
    return [teachers, setTeacher]
}

export default useTeacher;