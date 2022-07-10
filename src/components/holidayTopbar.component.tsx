import { h, JSX } from 'preact'
import { Hotel } from '../types/booking';
import * as styles from './holidayTopbar.module.less'
import StarRating from './starRating.component'


export default function HolidayTopbar(props : Hotel): JSX.Element {
    return (
        <div>
            <div data-testid="holiday-topbar-title" className={`${styles['title']}`}>{props.name}</div>
            <div data-testid="holiday-topbar-subtitle" className={`${styles['subtitle']}`}>
                {props.content.starRating ? <StarRating rating={props.content.starRating}/> : ''}
                {props.content.propertyType} - {props.boardBasis}
            </div>
        </div>
    );
}