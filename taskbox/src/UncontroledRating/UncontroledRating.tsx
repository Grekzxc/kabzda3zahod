import React, { useState } from "react"

type RatingType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

type RatingPropsType = {
    defaultValue?: number
    onChange: (value: number) => void
}

export const UncontroledRating = (props: RatingPropsType) => {

    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => { setValue(1) }} />
            <Star selected={value > 1} setValue={() => { setValue(2) }} />
            <Star selected={value > 2} setValue={() => { setValue(3) }} />
            <Star selected={value > 3} setValue={() => { setValue(4) }} />
            <Star selected={value > 4} setValue={() => { setValue(5) }} />
        </div>
    )
}

type StarType = {
    selected: boolean
    setValue: () => void
}
const Star = (props: StarType) => {
    return (
        <span onClick={() => { props.setValue() }}> {props.selected ? <b>  Star</b> : ' Star'}</span>
    )
}
