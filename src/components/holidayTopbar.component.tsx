import { h, JSX } from 'preact'
import { Hotel } from '../types/booking';
import * as styles from './holidayTopbar.module.less'
import StarRating from './starRating.component'


export default function HolidayTopbar(props : Hotel): JSX.Element {
    // const starsRating = props.content.starRating ? 
    return (
        <div>
            <div className={`${styles['title']}`}>{props.name}</div>
            <div className={`${styles['subtitle']}`}>
                {props.content.starRating ? <StarRating rating={props.content.starRating}/> : ''}
                {props.content.propertyType} - {props.boardBasis}
            </div>
        </div>
    );
}