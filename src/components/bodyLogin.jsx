'use client';
import { Input } from 'antd';
import React from "react"

const onClick = async() => {

}

const BodyLogin = (props) => {
    return (
        <div>
        <Input placeholder="Username " />
        <Input type="password" placeholder="Password " onClick={onClick}/>
        </div>
    )
}

export default BodyLogin;
