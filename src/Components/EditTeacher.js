import React, { useContext, useEffect, useState } from "react";
import Base from "../Base/Base";
import { useParams } from "react-router-dom";
import { StudentContext } from "../App";

export default function EditTeacher(){

    const {teacherdatas, setTeacherdatas,navigate} = useContext(StudentContext)
    const {id} = useParams();
    const [idx,setIdx] = useState("")
    const [name,setName] = useState("")
    const [classes,setClasses] = useState("");
    const [address,setAddress] = useState("");

    const data = teacherdatas.find((teach) => teach.id === id)
    // console.log(data)
    useEffect(()=>(
        setIdx(data.id),
        setName(data.Name),
        setClasses(data.class),
        setAddress(data.address)
    ),[])
        // console.log(id)
    function editteacherdata(){
        const alterTeacher = {
            id:idx,
            Name:name,
            class:classes,
            address:address
        }
        // console.log(alterTeacher)
        const changedata = teacherdatas.findIndex((teach)=>teach.id === id)
        // console.log(changedata)
        teacherdatas[changedata] = alterTeacher
        setTeacherdatas([...teacherdatas])
        navigate('/teacher')
    }
    
    return(
        <Base>
            <div className="input my-5">
                <input className="form-control m-2" placeholder="ID"
                onChange={(e)=> setIdx(e.target.value)} value={idx}/>
                <input className="form-control m-2" placeholder="Name"
                onChange={(e)=> setName(e.target.value)} value={name}/>
                <input className="form-control m-2" placeholder="Class"
                onChange={(e)=> setClasses(e.target.value)} value={classes}/>
                <input className="form-control m-2" placeholder="Address"
                onChange={(e)=> setAddress(e.target.value)} value={address}/>
                <button className="btn btn-primary" onClick={()=>editteacherdata()}>Edit Teacher</button>
            </div>
       </Base>
    )
}