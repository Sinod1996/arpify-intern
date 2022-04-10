import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"
export  function FormList  ()  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [imageFile, setImageFile] = useState(null);
 const [file, setFile] = useState(null)

 
 const submitUser =  (ev) => {
   ev.preventDefault();
 }


 const SubmitFile = async () => {
   const data= {firstName, lastName, birthDay, gender, imageFile, file}
   const url = "http://intern-2022.arpify.com/form";
   await axios({
     method: "post",
     url : url,
     headers : {
       "Conten-Type" : "multipart/form-data"
     },
     data: data
   })
     .then(res => {
       console.log(res);
      
     })
    
}

 return (
   <div className='ar_form'> 
       
       <form onSubmit={submitUser} >  

               
             <input type = "text" name = "firstName"  value = {firstName} placeholder="firstName" 
              onChange={(e) => setFirstName(e.target.value) } />
                     <br /> <br />
                     
                   
               <input type = "text" name = "lastName"  value = {lastName} placeholder="lastName"
              onChange={(e) => setLastName(e.target.value) } />
                        <br /> <br />

                       
               <input type = "text" name = "birthDay"  value = {birthDay} placeholder="birthDay"
              onChange={(e) => setBirthDay(e.target.value) } />
                        <br /> <br />

                     
               <input type = "text" name = "gender"  value = {gender}
               placeholder="gender"
              onChange={(e) => setGender(e.target.value) } />
                        <br /> <br />

                      
               <input type = "file" name = "imageFile" 
              onChange={(e) => setImageFile( e.target.files[0]) } /> 
                <br /> <br />

             
               <input type = "file" name = "file" 
              onChange={(e) => setFile( e.target.files[1]) } /> 
                <br /> <br />
              

                <input type = "submit" onClick={SubmitFile} />
                
                <br /> <br />

                <NavLink to = "/">Exit</NavLink>
                
       </form>
   </div>
 )
}
