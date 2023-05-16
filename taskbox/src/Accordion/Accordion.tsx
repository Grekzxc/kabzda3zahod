import React, { useState } from "react"

type AccordionType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} />
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}


type AccordionTitleType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitleType) =>

    <h3 onClick={(e) => props.onChange()}>{props.title}</h3>


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}