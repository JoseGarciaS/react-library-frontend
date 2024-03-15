'use client'
import  Button from '@/components/button'
import BodyLogin from '@/components/bodyLogin'
import React from "react"

const centerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200px',
  height: '200px'
};


// This is the Modal component
const LoginModal = (props) => {
  return (

    <div style={centerStyles}>
    <h1>Login</h1>
    <BodyLogin />
    <Button />
    </div> 
  );
};

export default LoginModal;



