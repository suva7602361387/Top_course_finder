import Navbar from "./Component/Navbar"
import Cards from "./Component/Cards"
import Filter from "./Component/Filter"
import Spinner from "./Component/Spinner.jsx"


import {filterData, apiUrl}from "./data"
import { useEffect,useState } from "react"


function App(){
  const [courses,setcourses]=useState(null);
  
  const [loding,setloding]=useState(true);

  const [category,setcategory]=useState(filterData[0].title);


  
  async function fetchData(){
    setloding(true);
    try{
      let res=await fetch(apiUrl);
      let out=await res.json();
      console.log(out);
      setcourses(out.data);
     
      
    }
    catch(error){
      
      
    }
    setloding(false);

  }
  useEffect(()=>{
    fetchData();
  },[]);

      
  
  

  return(
    <div className="flex flex-col min-h-screen bg-slate-700" >
      <div>
        <Navbar/>
      </div>
      <div>
            <div>
              <Filter filterdata={filterData}
              category={category}
              setcategory={setcategory} 
              />
            </div>
            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loding ?(<Spinner/>):(<Cards courses={courses} category={category}/>)
              }
       
       
            </div>
      
      </div>
      
      
      
    </div>
  )
}

export default App;

