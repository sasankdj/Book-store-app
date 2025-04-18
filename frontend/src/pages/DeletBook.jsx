import React, { useState } from 'react'
import axios from "axios"
import Spinner from '../components/Spinner'
import BackButton from "../components/BackButton.jsx"
import {useNavigate,useParams} from "react-router-dom";
const DeletBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const handleDelete = async () => {
    setLoading(true);
    axios
    .delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
      alert("anerror occured");
      
    });
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete book</h1>
      {loading?<Spinner/>:""}
      <div className='flex flex-col items-center borderr-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'> are you sure! you want to delete?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDelete}>
    Yes delete it!
        </button>
      </div>
    </div>
  )
}

export default DeletBook