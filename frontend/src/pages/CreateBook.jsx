import React, { useState } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import BackButton from "../components/BackButton.jsx"
import {useNavigate} from "react-router-dom";
const CreateBook = () => {
  const[title,setTitle]=useState('');
  const[author, setAuthor]=useState('');
  const[publishyear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleSaveBook=async()=>{
    const data={
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
    .post('http://localhost:3000/books', data)
    .then(() => {
      setLoading(false);
      navigate("/");
    
  })
  .catch((err)=>{
    setLoading(false);
    alert("an error occurred");
    console.log(err);
    
  });
};
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading?<Spinner/>:""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Title</label>
          <input type="text" name="" id=""value={title} onChange={(e)=>setTitle(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>

        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Author</label>
          <input type="text" name="" id=""value={author} onChange={(e)=>setAuthor(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>

        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Publish year</label>
          <input type="number" name="" id=""value={publishyear} onChange={(e)=>setPublishYear(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
         <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>save</button>
      </div>
    </div>
  )
}

export default CreateBook