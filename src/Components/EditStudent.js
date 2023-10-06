import React, { useContext, useEffect, useState } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import { StudentContext } from "../App";

export default function EditStudent(){
    const {studentDatas,setStudentDatas,navigate} = useContext(StudentContext)
    const {id} = useParams();
    const [idx,setIdx] = useState("")
    const [name,setName] = useState("")
    const [classes,setClasses] = useState("");
    const [address,setAddress] = useState("");

    const data = studentDatas.find((user)=>user.id === id)
    
    useEffect(()=>{
        setIdx(data.id);
        setName(data.Name);
        setClasses(data.class);
        setAddress(data.address);
        // eslint-disable-next-line
    }, [])

    // console.log(id)
    function editdata(){
        const alterStudent = {
            id:idx,
            Name:name,
            class:classes,
            address:address
        }
        // console.log(alterStudent)
        const changedata = studentDatas.findIndex((user)=>user.id === id)
        // console.log(changedata)
        studentDatas[changedata] = alterStudent
        setStudentDatas([...studentDatas])
        navigate('/student')
    }


    return(
       <Base>
            <div className="input my-5">
                <input className="form-control m-2" placeholder="ID"
                onChange={(event)=> setIdx(event.target.value)} value={idx}/>
                <input className="form-control m-2" placeholder="Name"
                onChange={(event)=> setName(event.target.value)} value={name}/>
                <input className="form-control m-2" placeholder="Class"
                onChange={(event)=> setClasses(event.target.value)} value={classes}/>
                <input className="form-control m-2" placeholder="Address"
                onChange={(event)=> setAddress(event.target.value)} value={address}/>
                <button className="btn btn-primary" onClick={()=>editdata()}>Edit Student</button>
            </div>
       </Base>
    )
}