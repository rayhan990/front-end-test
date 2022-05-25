import { h, JSX } from 'preact'
import * as styles from './starRating.module.less'
import { FaStar } from 'react-icons/fa'

type RatingProps = {
  rating: number|String
}

export default function HolidayInfo(props : RatingProps): JSX.Element {
    return (
        <div data-testid="rating" className={`${styles['starRating']}`}>
            {props.rating}<FaStar/>
        </div>
    )
}