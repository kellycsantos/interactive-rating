'use client'
import { useState } from 'react'
import styles from './rating.module.scss'

type RatingProps = {
    rating: number,
    click?: (value:number) => void,
}

export const Rating = ({rating, click }: RatingProps) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null)

    return (
        <>
            {
                Array.from({ length: rating }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {setSelectedItem(index + 1), click?.(index+1)}}
                        className={`${styles.rating} ${selectedItem === index + 1 ? styles.active : ''}`}>
                        {index + 1}
                    </button>
                ))
            }
        </>
    )
}