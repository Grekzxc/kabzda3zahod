import React from "react"

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </div>
        )
    }
}



type AccordionTitleType = {
    title: string
}
const AccordionTitle = (props: AccordionTitleType) => <h3>{props.title}</h3>


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}