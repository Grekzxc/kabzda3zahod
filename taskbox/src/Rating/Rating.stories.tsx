import React, { useState } from "react";
import { Rating, RatingValueType } from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyStars = () => <Rating value={3} onClick={x => x} />

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return (
        <Rating value={rating} onClick={setRating} />
    )
}