
import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    let courses=props.courses;
   const [LikedCourse,setLikedCourse]=useState([]);
   let category=props.category;
    

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };
    let allCourses = [];
    function getCourses() {
    
           if(category==="All"){
            Object.values(props.courses).forEach(function(arr) {
                
               
                arr.forEach((x)=>{
                    allCourses.push(x);
                })
            })
            
            return allCourses;
           }
           else{
              return courses[category];

           }
        
           
           
       
            
    }
    console.log(allCourses);
   // let x=getCourses;

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                
               getCourses().map((course)=>{
                return <Card course={course} LikedCourse={LikedCourse} setLikedCourse={setLikedCourse}/>
               })
                
            }
        </div>
    );
};

export default Cards;
