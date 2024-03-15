'use client'
import { Button } from 'antd';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React from "react"

const button = (props) => {

  const router = useRouter()
    return (
        <Button onClick={() => {router.push("/blankPage")}} >Login</Button>
      );
};

export default button;
