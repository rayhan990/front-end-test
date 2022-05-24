import { h, JSX } from 'preact'
import * as styles from './starFilter.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { FILTERS } from '../consts/filters.ts';

type RatingProps = {
  starRatings: Integer[]|String[],
  handleChange : function
}

export default function StarFilter(props : RatingProps): JSX.Element {
    const [selectedRatings, setSelectedRatings] = useState({});

    useEffect(() => {
        setSelectedRatings([...props.starRatings]);
    }, [props.starRatings])

    const onClick = (rating) => {
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
    }


    return props.starRatings ? props.starRatings.map((rating, i) => {
        return(
            <span>
                <label className={`${styles['label']}`} for={rating}>{rating || FILTERS.Unrated}<FontAwesomeIcon icon={ faStar }/></label>
                <input type="checkbox" value={rating} id={rating} checked={selectedRatings.includes(rating)} onClick={() => onClick(rating)}/>
            </span>
        );
    }) : '';
}