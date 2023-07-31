import React from 'react';
let m =[
    {name:"Naman",branch:"IoT"},
    {name:"Mohan",branch:"IoT"},
    {name:"Rohan",branch:"IoT"},
    {name:"Jayant",branch:"IoT"},
    {name:"Saurabh",branch:"CSE"}
    ];

export default function Display1() {
  return (
    <div class="container mt-5 pt-5">

    {
        m.map(
            (obj) =>{
                return (
                <p> Name is {obj.name}, and branch is {obj.branch}</p>
                )
                

            }
        )
    }
    </div>

  )
}
