import { h, JSX } from 'preact'
import * as styles from './starRating.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

type RatingProps = {
  rating: Integer|String
}

export default function HolidayInfo(props : RatingProps): JSX.Element {
    return (
        <div className={`${styles['starRating']}`}>
            {props.rating}<FontAwesomeIcon icon={ faStar }/>
        </div>
    )
}