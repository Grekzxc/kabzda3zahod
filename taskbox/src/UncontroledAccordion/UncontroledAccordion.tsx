import React, { useState } from "react"

type AccordionType = {
    titleValue: string
    // collapsed?: boolean
}

export const UncontroledAccordion = (props: AccordionType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} />
            {!collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleType = {
    onClick: () => void
    title: string
}
const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3 onClick={() => { props.onClick() }}>{props.title}</h3>
    )
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}