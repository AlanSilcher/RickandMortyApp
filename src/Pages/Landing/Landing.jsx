import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'

export default function Landing() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  }

  return (
    <div className='body'>
      <h1>Welcome</h1>
  <button class="custom-btn btn-5" onClick={handleStart}><span>Start</span></button>
    </div>
  )
}