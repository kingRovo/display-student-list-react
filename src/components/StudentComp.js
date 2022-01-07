
import React,{useState,useEffect} from 'react'
import StudentServ from '../services/StudentServ'

 function StudentComp() {

    const [student, setstudent] = useState([])
    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = ()=> {

        StudentServ.getStudent().then((response)=>{
             
            setstudent(response.data)
            console.log(response.data);
        });

    };

    return (
        <div className='container'>

            <h1 className='text-center'>Student List </h1>

            <table className='table table-striped'>

                <thead>
                    <tr>
                        <td>Student Id</td>
                        <td>Name </td>
                        <td>City </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map(

                            student=>
                            <tr key = {student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.city}</td>
                            </tr>


                        )
                    }
                </tbody>


            </table>
           
            
        </div>
    )
}
export default StudentComp;