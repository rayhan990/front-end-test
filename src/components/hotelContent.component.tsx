import { h, JSX } from 'preact'
import { HotelContent } from '../types/booking';
import * as styles from './hotelContent.module.less'
import 'font-awesome/css/font-awesome.min.css';

export default function HotelContents(props : HotelContent): JSX.Element {
    return (
        <div data-testid="hotel-content" className={styles['holiday-content']}>
            <p dangerouslySetInnerHTML={{__html : props.atAGlance.join(', ')}} />
        </div>
    )
}