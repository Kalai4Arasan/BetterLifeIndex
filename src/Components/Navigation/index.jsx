import { render } from '@testing-library/react';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import React, { Component, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DataEntry from '../DataEntry';
import Index from '../Index';

const Navigation=({
    evalParams,
    setEvalParams
})=>{
    const location=useParams()
    const {type}=location
    let component;
    console.log(type)
    switch(type){
        case "data-entry":
            component=<DataEntry/>
            break
        default:
            component=<Index
            evalParams={evalParams}
            setEvalParams={setEvalParams}
            />
            break
    }
    return component;
}

export default Navigation