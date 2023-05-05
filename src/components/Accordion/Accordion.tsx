import React, { useState } from "react"

type AccordionType = {
    titleValue: string
    onChenge: () => void
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChenge={props.onChenge} />
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}


type AccordionTitleType = {
    title: string
    onChenge: () => void
}
const AccordionTitle = (props: AccordionTitleType) =>

    <h3 onClick={props.onChenge}>{props.title}</h3>


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}