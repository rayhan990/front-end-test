import { h, JSX } from 'preact'
import { useState } from 'preact/hooks';
import { HotelContent } from '../types/booking';
import * as styles from './hotelContent.module.less'
import parse from 'html-react-parser';
import 'font-awesome/css/font-awesome.min.css';

export default function HotelContents(props : HotelContent): JSX.Element {
    return (
        <div className={styles['holiday-content']}>
            <p>{parse(props.atAGlance.join(', '))}</p>
        </div>
    )
}