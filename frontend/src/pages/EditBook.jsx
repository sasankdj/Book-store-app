import React, { useState,useEffect } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import BackButton from "../components/BackButton.jsx"
import {useNavigate,useParams} from "react-router-dom";
const EditBook = () => {
  const[title,setTitle]=useState('');
  const[author, setAuthor]=useState('');
  const[publishyear,setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(() => {
    setLoading(true);
    axios
    .get(`http://localhost:3000/books/${id}`)
    .then((res)=>{
      setAuthor(res.data.author);
      setPublishYear(res.data.publishyear)
      setTitle(res.data.title)
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      alert("error occured check console");
    });
  },[])
  const handleEditBook=async()=>{
    const data={
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
    .put(`http://localhost:3000/books/${id}`, data)
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
        <h1 className='text-3xl my-4'>Edit Book</h1>
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
         <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>save</button>
      </div>
    </div>
  )
}

export default EditBook