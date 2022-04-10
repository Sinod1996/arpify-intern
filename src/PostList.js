import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


function PostList() {

const requestBody = {
  "firstName": 'Sinod',
  "lastName": 'Poghosyan',
  "birthDay": '1996-02-08',
  "gender": 'male'
};
 const [data, setData] =  useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          'http://intern-2022.arpify.com/init',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),

          }
        );   
        const users = await data.json();
        console.log(users);
        setData(users)
        
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [] );


  return (
    <div className="post-list">
          <table border = "1">
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>birthDay</th>
                <th>gender</th>
              </tr>
            </thead>
           <tbody>
            {data.map(item=>{
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.birthDay} </td>
                <td>{item.gender}</td>
            </tr>
            )
            
          })}
                 
            </tbody>
          </table>

        <NavLink to="/form" className="NavLink">
          New Blank</NavLink>
    </div>
  );
}

export default PostList;
    










