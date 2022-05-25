import { h, JSX } from 'preact'
import { useState } from 'preact/hooks';
import { HotelContent } from '../types/booking';
import { HOLIDAYINFO } from '../consts/holidayInfo';
import * as styles from './hotelDesc.module.less'
import parse from 'html-react-parser';

export default function HotelDescriptions(props : HotelContent): JSX.Element {
    const [expanded, setExpanded] = useState(false);

    const onExpand = () => {
        setExpanded(!expanded);
    }

    const expandText = expanded ? HOLIDAYINFO.ReadLess : HOLIDAYINFO.ReadMore;

    return (
        <div aria-label="hotel-desc-container" className={styles['holiday-description']}>
            {expanded ? <h2>Description:</h2> : ''}
            {expanded ? <p aria-label="hotel-description">{parse(props.hotelDescription)}</p> : ''}
            {props.hotelDescription ? <button aria-label="hotel-desc-expand" className={`${styles['expand-button']}`} onClick={onExpand}>{expandText}</button> : ''}
        </div>
    )
}