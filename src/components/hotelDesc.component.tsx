import { h, JSX } from 'preact'
import { useState } from 'preact/hooks';
import { Holiday } from '../types/booking';
import { HOLIDAYINFO } from '../consts/holidayInfo';
import * as styles from './hotelDesc.module.less'
import parse from 'html-react-parser';

export default function HotelContent(props : HotelContent): JSX.Element {
    const [expanded, setExpanded] = useState(false);

    const onExpand = () => {
        setExpanded(!expanded);
    }

    const expandText = expanded ? HOLIDAYINFO.ReadLess : HOLIDAYINFO.ReadMore;

    return (
        <div className={styles['holiday-description']}>
            {expanded ? <h2>Description:</h2> : ''}
            {expanded ? <p>{parse(props.hotelDescription)}</p> : ''}
            {props.hotelDescription ? <button className={`${styles['expand-button']}`} onClick={onExpand}>{expandText}</button> : ''}
        </div>
    )
}