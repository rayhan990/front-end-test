import { h, JSX } from 'preact'
import { Holiday } from '../types/booking';
import * as styles from './holidayInfo.module.less'
import { HOLIDAYINFO } from '../consts/holidayInfo';


export default function HolidayInfo(props : Holiday): JSX.Element {
    return (
        <div data-testid="holiday-info" className={`${styles['holiday-info']}`}>
            <div data-testid="totalprice" className={`${styles['price']} ${styles['col']}`}>{HOLIDAYINFO.Currency}{props.totalPrice} {HOLIDAYINFO.Total}</div>
            <div data-testid="pricepp" className={`${styles['pricepp']} ${styles['col']}`}>{HOLIDAYINFO.Currency}{props.pricePerPerson} {HOLIDAYINFO.PPP}</div>
            <div data-testid="departuredate" className={`${styles['col']}`}>{props.departureDate}</div>
            {props.flyingClubMiles ? <div data-testid="clubmiles" className={`${styles['col']}`}>{props.flyingClubMiles} {HOLIDAYINFO.ClubMiles}</div> : ""}
            {props.virginPoints ? <div data-testid="virginpoints" className={`${styles['col']}`}>{props.virginPoints} {HOLIDAYINFO.VirginPoints}</div> : ""}
            {props.tierPoints ? <div data-testid="tiremiles" className={`${styles['col']}`}>{props.tierPoints} {HOLIDAYINFO.TierMiles}</div> : ""}
        </div>
    )
}