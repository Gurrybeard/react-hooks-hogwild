import {React,useState,useEffect} from 'react'

export default function Description({e,cbRef}) {
    const [localDesc,setLocalDesc]=useState(false)
    useEffect(()=>{
        
      
              
    });
    cbRef.current= handleDesc;
     // console.log(cbRef)
    function handleDesc(){
        setLocalDesc(!localDesc);
       // console.log(localDesc)
    }
  return (
    <div>
        <button onClick={handleDesc}>Description</button>
        <div className='description'>{localDesc? <div>Specialty: {e.specialty} <br /> Weight: {e.weight} lbs </div>:''}</div>
        
        
    </div>
  )
  
  
}
