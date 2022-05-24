import { h, JSX } from 'preact'
import { Hotel } from '../types/booking';
import * as styles from './holidayFooter.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function HolidayTopbar(props : HotelContent): JSX.Element {
    return (
        <div>
            <div className={`${styles['footer']}`}>
                {props.holidayType.length ? `Ideal for ${props.holidayType.join(', ')}, ` : ''}<FontAwesomeIcon icon={ faLocationDot }/> {props.parentLocation}, {props.hotelLocation}</div>
            <div className={`${styles['footer']}`}>Facilities: {props.hotelFacilities.join(', ')}</div>
        </div>
    );
}