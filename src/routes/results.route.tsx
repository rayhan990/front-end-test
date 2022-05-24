import { h, JSX } from 'preact'
import { useRouter } from "preact-router";
import { useEffect, useState } from 'preact/hooks';
import { ButtonComponent } from '../components/button.component'
import SearchComponent from '../components/search.component';
import ResultsComponent from '../components/results.component';
import FilterComponent from '../components/filter.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse } from '../types/booking';
import { DateTime } from 'luxon';

export default function ResultsRoute(): JSX.Element {
    const [searchParams] = useRouter();
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilters] = useState({});
    const [filteredHolidays, setFilteredHolidays] = useState([]);

    useEffect(() => {
        const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        const requestBody: BookingRequest = {
            "bookingType": "holiday",
            "location": searchParams?.matches?.location,
            "departureDate": departureDate,
            "duration": searchParams?.matches?.duration as unknown as number,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": searchParams?.matches?.adults as unknown as number,
                    "childAges": [],
                    "infants": 0
                }
            ]
        }

        setLoading(true);

        doRequest('POST', '/cjs-search-api/search', requestBody)
            .then((response: unknown | BookingResponse) => {
                setLoading(false);
                setHolidays(response.holidays);
                setFilteredHolidays(response.holidays);
            })
    }, [searchParams])

    return (
        <section>
            <SearchComponent />
            {holidays.length ?  <FilterComponent holidays={holidays} setHolidays={setFilteredHolidays}/> : ''}
            {loading ? "Loading..." : <ResultsComponent holidays={filteredHolidays}/> }
        </section>
    )
}