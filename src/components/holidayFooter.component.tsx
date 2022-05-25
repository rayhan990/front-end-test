import { h, JSX } from 'preact'
import { Hotel } from '../types/booking';
import * as styles from './holidayFooter.module.less'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function HolidayTopbar(props : HotelContent): JSX.Element {
    return (
        <div>
            <div className={`${styles['footer']}`}>
                {props.holidayType.length ? `Ideal for ${props.holidayType.join(', ')}, ` : ''}<FaMapMarkerAlt/> {props.parentLocation}, {props.hotelLocation}</div>
            <div className={`${styles['footer']}`}>Facilities: {props.hotelFacilities.join(', ')}</div>
        </div>
    );
}