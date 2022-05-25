import { h, JSX } from 'preact'
import * as styles from './starFilter.module.less'
import { FaStar } from 'react-icons/fa'
import { useState, useEffect } from 'preact/hooks';
import { FILTERS } from '../consts/filters';

type RatingProps = {
  starRatings: number[]|String[],
  handleChange : (ratings : (number | String | undefined)[]) => void
}

const StarFilter = (props : RatingProps)  =>{
    const [selectedRatings, setSelectedRatings] = useState<(number | String | undefined)[]>([]);

    useEffect(() => {
        setSelectedRatings([...props.starRatings]);
    }, [props.starRatings])

    const onClick = (rating  => {
        setSelectedRatings(ratings => {
            const index = ratings.indexOf(rating);

            if(index<0){
                ratings.push(rating);
            }else{
                ratings.splice(index, 1);
            }

            props.handleChange(ratings);
            return ratings;
        });
    })


    const elements = props.starRatings.map((rating , i) => {
        return(
            <span data-testid={`star-filter-container${i}`}>
                <label data-testid={`star-filter-label${i}`} className={`${styles['label']}`} for={`${rating}`}>{rating || FILTERS.Unrated}<FaStar /></label>
                <input data-testid={`star-filter-checkbox${i}`} type="checkbox" value={rating} id={`${rating}`} checked={selectedRatings.includes(rating)} onClick={() => onClick(rating)}/>
            </span>
        );
    })

   return <div>{elements}</div>
}

export default StarFilter;