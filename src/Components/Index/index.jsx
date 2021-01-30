import { Card, Col, Row, Slider } from 'antd';
import React, { Component, useEffect, useState } from 'react';

const Index=()=>{
var canvas ;
var context ;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;

const [itemName,setItemName]=useState([
    "Afghanistan",
    "India",
    "Indonesia",
    "Iran",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "United Kingdom",
    "United States",
    "United States of America",
])
const [itemValue,setItemValue]=useState([ 14, 7, 4.2, 4, 3.5,14, 7, 4.2, 4, 3.5,9 ])
useEffect(()=>{
        console.log(itemValue)
        sections = itemValue.length;
        Val_Max = 14;
        var stepSize = 1;
        var columnSize = 20;
        var rowSize = 60;
        var margin = 1;
        // var header = "In Trillion $" 
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        // context.fillStyle = "#000"
        
        yScale = (canvas.height - columnSize - margin) / (Val_Max);
        xScale = (canvas.width - rowSize) / (sections + 1);
        
        context.strokeStyle='#f0f2f5';
        // context.beginPath();
        context.font = "19 pt Arial"
        // context.fillText(header, 0,columnSize - margin);
        context.font = "16 pt Helvetica"
        var count =  0;
        for (let scale=Val_Max;scale>=0;scale = scale - stepSize) {
            y = columnSize + (yScale * count * stepSize); 
            context.fillText(scale, margin,y + margin);
            context.moveTo(rowSize,y)
            context.lineTo(canvas.width,y)
            count++;
        }
        context.stroke();
        context.font = "20 pt Verdana";
        context.textBaseline="bottom";
        let c=10
        for (let i=0;i<itemName.length;i++) {
            computeHeight(itemValue[i]);
            context.fillText(itemName[i], xScale * (i+1),y - margin);
            // for(let item in itemName[i]){
            //     context.fillText(item,  xScale * (i+1), y - margin+c);
            //     c+=10;
            // }
        }
    
    context.fillStyle="grey";
        context.translate(0,canvas.height - margin);
        context.scale(xScale,-1 * yScale);
      
        for (let i=0;i<itemValue.length;i++) {
            context.fillRect(i+1, 0, 0.05, itemValue[i]);
        }
},itemValue)


function computeHeight(value) {
	y = canvas.height - value * yScale ;	
}

// console.log(itemValue)
const changeValue=(e,index)=>{
        let v=[...itemValue]
        v[index]=e
        setItemValue(v)
}


    return (<>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <canvas id="canvas" height="500" style={{backgroundColor:'#f0f2f5',margin:'1rem',border:'1px solid grey',padding:'1rem'}} width="800"></canvas>
    <div style={{margin:'1rem'}}>
        <Card title="Countries" bordered={true} style={{ width: 300 }}>
            {itemName&&itemName.map((item)=>{
                // return <div style={{display:'flex',justifyContent:'space-around'}}>
                //         
                //         <Slider
                //             style={{width:'200px'}}
                //             min={1}
                //             max={5}
                //         />
                //     </div>
                return(
                    <Row>
                        <Col span={7}>
                        <p>{item}</p>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={16}>
                        <Slider
                            min={1}
                            max={5}
                            onChange={(e)=>{changeValue(e,itemName.indexOf(item))}}
                        />
                        </Col>
                    </Row>
                )
            })}
        </Card>
    </div>
    </div>
    </>)
}

export default Index