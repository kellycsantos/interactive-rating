'use client'
import Image from 'next/image';
import star from '../../assets/icon-star.svg';
import phone from '../../assets/illustration-thank-you.svg';

import { Button, Rating } from '@/components'
import styles from './card.module.scss'
import { useState } from 'react';
export const Card = () => {
    const totalRating = 5;
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<number | null>(null);

    return (
        <article className={styles.card}>
            {
                isSubmit &&
                <Button text='x' variable='small' click={() => setIsSubmit(false)}/>
            }
            {
                isSubmit ?
                    <div className={styles.submitted_container}>

                        <Image className={styles.icon_finish} src={phone} alt='phone icon' />
                        <span className={styles.chip_selected_value}>You selected {ratingValue} out of {totalRating}</span>
                        <h2>Thank you!</h2>
                        <p className={styles.description}>
                            We appreciate you taking the time to give a rating.
                            If you ever need more support, don't hesitate to get in touch!
                        </p>
                    </div> :

                    <>
                        <Image className={styles.icon} src={star} alt='star icon' />
                        <h2>How did we do?</h2>
                        <p className={styles.description}>
                            Please let us know how we did with your support request.
                            All feedback is appreciated to help us improve our offering!
                        </p>
                        <div className={styles.rating_section}>
                            <Rating rating={5} click={(value) => setRatingValue(value)} />
                        </div>

                        <Button disabled={!ratingValue} click={() => setIsSubmit(true)} text='submit' />

                    </>

            }
        </article>
    )
}