import React, { useState } from "react";
import { actions } from '@storybook/addon-actions'
import { UncontrolledOnOff } from "./UncontroledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callBack = () => actions('Click')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack} />

export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack} />

export const OnOffMode = () => {
    const [on, setOn] = useState(true)

    return (
        <UncontrolledOnOff on={on} onChange={setOn} />
    )
}
