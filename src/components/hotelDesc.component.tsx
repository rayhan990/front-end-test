import { h, JSX } from 'preact'
import { useState } from 'preact/hooks';
import { HotelContent } from '../types/booking';
import { HOLIDAYINFO } from '../consts/holidayInfo';
import * as styles from './hotelDesc.module.less'
import {ButtonComponent} from './button.component'

export default function HotelDescriptions(props : HotelContent): JSX.Element {
    const [expanded, setExpanded] = useState(HOLIDAYINFO.DefaultExpanded);

    const onExpand = () => {
        setExpanded(!expanded);
    }

    const expandText = expanded ? HOLIDAYINFO.ReadLess : HOLIDAYINFO.ReadMore;

    return (
        <div aria-label="hotel-desc-container" className={styles['holiday-description']}>
            {expanded ? <h2>Description:</h2> : ''}
            {expanded ? <p aria-label="hotel-description" dangerouslySetInnerHTML={{__html : props.hotelDescription}}/> : ''}
            {props.hotelDescription ? <ButtonComponent aria-label="hotel-desc-expand" data-testid="hotel-desc-expand" className={`${styles['expand-button']}`} onClick={onExpand} text={expandText} /> : ''}
        </div>
    )
}