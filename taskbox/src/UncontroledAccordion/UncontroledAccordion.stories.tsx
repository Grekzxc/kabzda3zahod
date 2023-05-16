import React, { useState } from "react";
import { actions, action } from '@storybook/addon-actions'
import { UncontroledAccordion } from "./UncontroledAccordion";


export default {
    title: 'UncontroledAccordion',
    component: UncontroledAccordion,
}
const callBack = action('click')

export const ModeChanging = () => {
    return (
        <UncontroledAccordion titleValue="Menu" />
    )
}
