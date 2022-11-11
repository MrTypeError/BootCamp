import React from "react";

// const Employee =(props) =>{
//     // console.log(props);

//     return(
//         <div>
//             <h2>Employee Name : {props.firstname} {props.lastname}</h2>
//         </div>
//     )
// }

// we can do it using destructuring in JS a small example is given below
// Using props (Recomended)
const Employee = (props) => {
  console.log(props);
  const { firstname, lastname, age: currAge, post: empPost } = props;
  return (
    <div>
      <h2>
        Employee Name : {firstname} {lastname} and your current age is : {currAge} and Post is : {empPost}
      </h2>
    </div>
  );
};

//Directly Destrcturing in the argument
// const Employee =({firstname ,lastname,age: currAge,post:empPost}) =>{
//     console.log(props);
//     return(
//         <div>
//             <h2>Employee Name : {firstname} {lastname} and your current age is : {currAge} and Post is : {empPost}</h2>
//         </div>
//     )
// }

export default Employee;
