import React, { useContext, useState } from "react";
import Base from "../Base/Base";
import { StudentContext } from "../App";

export default function AddNewStudent(){

    const {studentDatas,setStudentDatas,navigate} = useContext(StudentContext)
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [classes,setClasses] = useState("")
    const [address,setAddress] = useState("")

    function addNewStudent(){

        const newStudent = {
            id:id,
            Name:name,
            class:classes,
            address:address
        }
        // console.log(newStudent)
        setStudentDatas([...studentDatas,newStudent])
        navigate('/student')
    }

    return(
        <>
        <Base>
            <div className="input my-5">
                <input className="form-control m-2" placeholder="ID"
                onChange={(event)=> setId(event.target.value)}/>
                <input className="form-control m-2" placeholder="Name"
                onChange={(event)=> setName(event.target.value)}/>
                <input className="form-control m-2" placeholder="Class"
                onChange={(event)=> setClasses(event.target.value)}/>
                <input className="form-control m-2" placeholder="Address"
                onChange={(event)=> setAddress(event.target.value)}/>
                <button className="btn btn-primary" onClick={()=>addNewStudent()}>Add Student</button>
            </div>
        </Base>
        </>
    )
}