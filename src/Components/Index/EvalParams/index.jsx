import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { Component, useEffect, useState } from 'react';

const EvalParams=({
    evalParams,
    setEvalParams
})=>{
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[evalParams])
    return (
        <div style={{margin:'1rem'}}>
            <Card style={{ width: '100%', marginTop: 16 }} bordered={false} loading={loading}>
                <Meta
                    title={evalParams&&evalParams}
                    description=""
                />
                <p style={{margin:'1rem'}}>
                A bank is a financial institution licensed to receive deposits and make loans.
                    There are several types of banks including retail, commercial, and investment banks.
                    In most countries, banks are regulated by the national government or central bank.
                    A bank is a financial institution licensed to receive deposits and make loans. Banks may also provide financial services such as wealth management, currency exchange, and safe deposit boxes. There are several different kinds of banks including retail banks, commercial or corporate banks, and investment banks. In most countries, banks are regulated by the national government or central bank.
                </p>

            </Card>
        </div>
    )

}

export default EvalParams