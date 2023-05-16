import React, { useState } from "react";
import { OnOff } from "./OnOff";
import { actions } from '@storybook/addon-actions'


export default {
    title: 'OnOff',
    component: OnOff,
}
const callBack = () => actions('as')

export const OnMode = () => <OnOff on={true} onChange={callBack} />

export const OffMode = () => <OnOff on={false} onChange={callBack} />

export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return (
        <OnOff on={value} onChange={setValue} />
    )
}
