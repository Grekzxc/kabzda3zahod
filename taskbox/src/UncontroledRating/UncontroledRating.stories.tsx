import React, { useState } from "react";
import { actions, action } from '@storybook/addon-actions'
import { UncontroledRating } from "./UncontroledRating";



export default {
    title: 'UncontroledRating',
    component: UncontroledRating,
}
const callBack = action('click')

export const Rating0 = () => <UncontroledRating defaultValue={1} onChange={callBack} />


