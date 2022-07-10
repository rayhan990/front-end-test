import { h, JSX } from 'preact'
import { HotelContent } from '../types/booking';
import * as styles from './holidayFooter.module.less'

export default function HolidayFooter(props : HotelContent): JSX.Element {
    return (
        <div>
            <div className={`${styles['footer']}`}>
                {props.holidayType.length ? `Ideal for ${props.holidayType.join(', ')}, ` : ''} &#11165; {props.parentLocation}, {props.hotelLocation}</div>
            <div className={`${styles['footer']}`}>Facilities: {props.hotelFacilities.join(', ')}</div>
        </div>
    );
}