import { Card, Col, Row, Slider } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import ChartComponent, { Bar } from 'react-chartjs-2';
import EvalParams from './EvalParams';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Index=({
    evalParams,
    setEvalParams
})=>{

const [itemName,setItemName]=useState([
    "Axis bank",
    "Bank of baroda",
    "Bank of India",
    "Canara Bank",
    "CITI",
    "DBS",
    "HDFC",
    "ICICI",
    "IDBI",
    "Indian Bank",
    "IndusInd",
    "Kotak Mahindra",
    "SBI",
    "PNB",
])

const [parameter,setParameter]=useState([
    "Improves Personal Capabilities to think, feel, imagine, reason",
    "Enhances Life Satisfaction ",
    "Enhances Feeling of Purpose",
    "Encourages participation",
    "Reduces Time and Effort",
    "Facilitates Convenience",
    "Helps Save or Earn Money",
    "Enhances Personal and Family Health and safety",
    "Immersive Experience",
    "Optimum Level of Challenge",
    "Connects People",
    "Builds Communities",
    "Provides choices for socially responsible lifestyle decisions",
    "Inclusive ( of age, gender, income, literacy, differently abled, language)",
])

const [itemValue,setItemValue]=useState([ 14, 7, 4.2, 4, 3.5, 14, 7, 4.2, 4, 3.5, 9, 12, 7,7 ])

const changeValue=(e,index)=>{
    let v=[...itemValue]
    v[index]=e
    setItemValue(v)
}


    return (
    <>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div id="cv">
        <Bar
        style={{backgroundColor:'white'}}
            data={
                {
                    labels: itemName,
                    datasets: [{
                        label: 'Banks',
                        data: itemValue,
                        barThickness:4,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1
                    }]
                }
            }
            width={1200}
            height={500}
            options={{
                title:{
                display:true,
                text:"Better Life Index",
                fontSize:25
                },
                legend:{
                display:true,
                },
                scales: {
                    xAxes: [{
                       gridLines: {
                          display: false
                       }
                    }],
                    yAxes: [{
                       gridLines: {
                          display: false
                       }
                    }]
               }
                
            }}
        />
        </div>
        </div>
        <Row>
        <Col span={24}>
        <div style={{margin:'1rem'}}>
        <Collapse
          expandIconPosition={'right'}
        >
          <Panel header="Evaluating Parameters" key="1">
          <Row>
                <Col span={7}>
                {parameter&&parameter.slice(0,5).map((item)=>{
                    return(
                        <>
                        <Row>
                            <p>{item}</p>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <Slider
                                min={1}
                                max={10}
                                onChange={(e)=>{changeValue(e,parameter.indexOf(item))}}
                            />
                            </Col>
                        </Row>
                        </>
                    )
                })}
                </Col>
                <Col span={1}/>
                <Col span={7}>
                {parameter&&parameter.slice(5,10).map((item)=>{
                    return(
                        <>
                        <Row>
                            <p>{item}</p>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <Slider
                                min={1}
                                max={10}
                                onChange={(e)=>{changeValue(e,parameter.indexOf(item))}}
                            />
                            </Col>
                        </Row>
                        </>
                    )
                })}
                </Col>
                <Col span={1}/>
                <Col span={7}>
                {parameter&&parameter.slice(10,14).map((item)=>{
                    return(
                        <>
                        <Row>
                            <p>{item}</p>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <Slider
                                min={1}
                                max={10}
                                onChange={(e)=>{changeValue(e,parameter.indexOf(item))}}
                            />
                            </Col>
                        </Row>
                        </>
                    )
                })}
                </Col>
                </Row>
          </Panel>
        </Collapse>
        </div>
        </Col>
        </Row>
        <Row>
            <Col span={4}></Col>
            <Col span={16}>
                <EvalParams
                evalParams={evalParams}
                setEvalParams={setEvalParams}
                />
            </Col>
            <Col span={4}></Col>
        </Row>
    </>
    )
}

export default Index