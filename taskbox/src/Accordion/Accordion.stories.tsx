import React, { useState } from "react";
import { actions, action } from '@storybook/addon-actions'
import { Accordion } from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action('click')

export const CollapsedMode = () => <Accordion titleValue="Menu" collapsed={true} onChange={callBack} />
export const UncontrolledMode = () => <Accordion titleValue="Books" collapsed={false} onChange={callBack} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion titleValue="Books" collapsed={value} onChange={() => setValue(!value)} />
    )
}
