import { h, JSX } from 'preact'
import * as styles from './starRating.module.less'
import { FILTERS } from '../consts/filters';

type RatingProps = {
  rating: number|String
}

export default function StarRating(props : RatingProps): JSX.Element {
    return (
        <div data-testid="rating" className={`${styles['starRating']}`}>
            {props.rating} &#9733;
        </div>
    )
}