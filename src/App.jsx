import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { apiUrl,filterData } from './data';
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


function App() {
  const[loading,setLoading]=useState(true);
  const [courses,setCourses]=useState([]);
  const [category,setCategory]=useState(filterData[0].title);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);  
    }
    fetchData();
  },[]);

  return (
    <div className="main-h-screen flex flex-col bg-green-50">
      <div><Navbar/></div>

      <div><Filter filterData={filterData} category={category} setCategory={setCategory}/></div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
  );
}

export default App
