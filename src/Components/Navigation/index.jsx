import { render } from '@testing-library/react';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Country from '../Country';
import Index from '../Index';
import Responses from '../Responses';

const Navigation=(props)=>{
    const location=useParams()
    const {type}=location
    let component;
    console.log(type)
    switch(type){
        case "responses":
            component=<Responses/>
            break
        case "country":
            component=<Country/>
            break
        default:
            component=<Index/>
            break
    }
    return component;
}

export default Navigation