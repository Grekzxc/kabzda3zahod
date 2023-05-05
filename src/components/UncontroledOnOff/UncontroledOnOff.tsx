import React, { useState } from "react";

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffType) => {


    const onStyle = {
        width: '30px',
        heigth: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        heigth: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }



    return (
        <div>
            <span style={onStyle} onClick={() => { props.onChange(true) }} >ON </span>
            <span style={offStyle} onClick={() => { props.onChange(false) }}>OFF </span>
            <div style={indicatorStyle} > </div>
        </div>
    )

}