'use client'
import { Button } from 'antd';
import Link from 'next/link';
import React from "react"

const button = (props) => {
    return (
        <Button onClick={<Link href={"/blankPage"}} />Login</Button>
      );
};

export default button;
