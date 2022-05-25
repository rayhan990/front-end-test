import { h, JSX } from 'preact'
import { Holiday } from '../types/booking';
import * as styles from './holidayInfo.module.less'
import { HOLIDAYINFO } from '../consts/HolidayInfo';


export default function HolidayInfo(props : Holiday): JSX.Element {
    return (
        <div className={`${styles['holiday-info']}`}>
            <div className={`${styles['price']} ${styles['col']}`}>{HOLIDAYINFO.Currency}{props.totalPrice} Total</div>
            <div className={`${styles['pricepp']} ${styles['col']}`}>{HOLIDAYINFO.Currency}{props.pricePerPerson} P/P</div>
            <div className={`${styles['col']}`}>{props.departureDate}</div>
            {props.flyingClubMiles ? <div className={`${styles['col']}`}>{props.flyingClubMiles} Flying Club Miles</div> : ""}
            {props.virginPoints ? <div className={`${styles['col']}`}>{props.virginPoints} Virgin Points</div> : ""}
            {props.tierPoints ? <div className={`${styles['col']}`}>{props.tierPoints} Tier Miles</div> : ""}
        </div>
    )
}