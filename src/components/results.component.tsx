import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { BookingRequest, BookingResponse,  } from '../types/booking';
import * as styles from './results.module.less'

import HolidayTopbar from './holidayTopbar.component'
import Carousel from './carousel.component'
import HolidayInfo from './holidayInfo.component'
import HotelContent from './hotelContent.component'
import HotelDesc from './hotelDesc.component'
import HolidayFooter from './holidayFooter.component'

export default function ResultsRoute(props : BookingResponse): JSX.Element {
    const [limit, setLimit] = useState(0);


    useEffect(() => {
        setLimit(10);
    }, []);

    const loadMore = () => {
        if(limit < props.holidays.length)
            setLimit(limit+10);
    }

    const buildResults = () => {
        const limitResults = props.holidays.slice(0, limit);

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
            <button data-testId="load-more-button" className={`${styles['load-more']}`} onClick={loadMore}>Load More</button>
        </div>
    )
}