import { h, JSX } from 'preact'
import * as styles from './starFilter.module.less'
import { useState, useEffect } from 'preact/hooks';
import { FILTERS } from '../consts/filters';

type RatingProps = {
  handleChange : (ratings : (number | String | undefined)[]) => void
}

const StarFilter = (props : RatingProps)  =>{
    const allRatings = FILTERS.StarRatings;
    const [selectedRatings, setSelectedRatings] = useState<(number | String | undefined)[]>([...allRatings]);

    const onClick = (rating  => {
        setSelectedRatings(ratings => {
            const index = selectedRatings.indexOf(rating);

            if(index<0){
                ratings.push(rating);
            }else{
                ratings.splice(index, 1);
            }

            props.handleChange(ratings);
            return ratings;
        });
    })


    const elements = allRatings.map((rating , i) => {
        return(
            <div className={`${styles['rating']}`} data-testid={`star-filter-container${i}`}>
                <label data-testid={`star-filter-label${i}`} className={`${styles['label']}`} for={`${rating}`}>{rating || FILTERS.Unrated} &#9733;</label>
                <input data-testid={`star-filter-checkbox${i}`} type="checkbox" value={rating} id={`${rating}`} checked={selectedRatings.includes(rating)} onClick={() => onClick(rating)}/>
            </div>
        );
    })

   return <div className={`${styles['ratings']}`}>{elements}</div>
}

export default StarFilter;