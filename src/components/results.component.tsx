import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { BookingResponse } from '../types/booking';
import * as styles from './results.module.less'

import HolidayTopbar from './holidayTopbar.component'
import Carousel from './carousel.component'
import HolidayInfo from './holidayInfo.component'
import HotelContent from './hotelContent.component'
import HotelDesc from './hotelDesc.component'
import {ButtonComponent} from './button.component'
import HolidayFooter from './holidayFooter.component'
import { RESULTS } from '../consts/results';

export default function ResultsRoute(props : BookingResponse): JSX.Element {
    const [limit, setLimit] = useState(RESULTS.DefaultLimit);

    const loadMore = () => {        
        if(limit < props.holidays.length){
            setLimit(limit+RESULTS.DefaultLimitIncrease);
        }
    }

    const buildResults = () => {
        const limitResults = props.holidays.slice(0, limit);

        if(limitResults.length === 0){
            return <div>{RESULTS.NoResults}</div>;
        }

        const data = limitResults.map((holiday, i) => {
            return (
                <div aria-label="result-tile" key={i} className={`${styles['resultTile']}`}>
                    <div className={`${styles['col']}`}>
                        <Carousel {...holiday.hotel.content}/>
                    </div>
                    <div className={`${styles['col']}`}>
                        <HolidayTopbar {...holiday.hotel}/>
                        <HotelContent {...holiday.hotel.content}/>
                    </div>
                    <div className={`${styles['col']}`}>
                        <HolidayInfo {...holiday}/>
                    </div>
                    <div className={`${styles['col']}`}>
                        <HotelDesc {...holiday.hotel.content}/>
                    </div>
                    <div className={`${styles['col']}`}>
                        <HolidayFooter {...holiday.hotel.content}/>
                    </div>
                </div>
            )
        })


        return data;
    }

    return (
        <div className={`${styles['results']}`}>
            {buildResults()}
            <ButtonComponent data-testid="load-more-button" className={`${styles['load-more']}`} onClick={loadMore} text={RESULTS.LoadMore}/>
        </div>
    )
}