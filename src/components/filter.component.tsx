import { h, JSX } from 'preact'
import * as styles from './filter.module.less'
import { Holiday } from '../types/booking';
import { useState, useEffect } from 'preact/hooks';
import PriceFilter from "./pricefilter.component";
import {ButtonComponent} from "./button.component";
import StarFilter from "./starFilter.component";
import FacilitiesFilter from "./facilitiesFilter.component";
import { FILTERS } from '../consts/filters';

type FilterProps = {
  holidays: Holiday[],
  setHolidays: Function
}

type Filters = {
    facilities : String[],
    maxPrice : number,
    minPrice : number,
    starRatings: string[]
}

export default function Filters(props : FilterProps): JSX.Element {
    const [filters, setFilters] = useState<Filters>(FILTERS.DefaultFilters);
    const [selectedFilters, setSelectedFilters] = useState<Filters>(FILTERS.DefaultFilters);

    useEffect(() => {
        buildFilters();
    }, [props.holidays]);

    const buildFilters = () => {
        const newFilters = {...FILTERS.DefaultFilters};

        const starRatings = new Set();
        const facilities = new Set();

        props.holidays.forEach(holiday => {
            newFilters.maxPrice = Math.max(newFilters.maxPrice, holiday.pricePerPerson);
            newFilters.minPrice = Math.min(newFilters.minPrice, holiday.pricePerPerson);
            starRatings.add(holiday.hotel.content.starRating);
            holiday.hotel.content.hotelFacilities.forEach(x => facilities.add(x));
        })


        newFilters.facilities = [...facilities].sort((x,y) => x>y? 1 : -1);
        newFilters.starRatings = [...starRatings];

        setFilters(newFilters);
        setSelectedFilters({...newFilters, facilities : []});
    }

    const handlePriceChange = (minPrice, maxPrice) => {
        setSelectedFilters(selectedFilter => {
            selectedFilter.maxPrice = maxPrice;
            selectedFilter.minPrice = minPrice;

            return selectedFilter;
        });
    };

    const handleStarRatingChange = (activeStars)=>{
        setSelectedFilters(selectedFilter => {
            selectedFilter.starRatings = [...activeStars];

            return selectedFilter;
        });
    }

    const handleFacilitiesUpdate = (selectedFacilities : String[])=>{
        setSelectedFilters(selectedFilter => {
            selectedFilter.facilities = selectedFacilities.map(x => x);

            return selectedFilter;
        });
    }

    const compareFacilities = (hotelFacilities, selectedFacilities) => {
        const intersection = selectedFacilities.filter(element => hotelFacilities.includes(element));

        return intersection.length==selectedFacilities.length;
    }

    const applyFilters = () => {
        const filteredHolidays = props.holidays.filter(holiday => {
            return(
                compareFacilities(holiday.hotel.content.hotelFacilities, selectedFilters.facilities) &&
                selectedFilters.starRatings.includes(holiday?.hotel?.content?.starRating?.toString()) &&
                holiday.pricePerPerson>=selectedFilters.minPrice &&
                holiday.pricePerPerson<=selectedFilters.maxPrice
            );
        });

        props.setHolidays(filteredHolidays);
    }

    return (
        <div data-testid="filter-component" className={`${styles['filterBar']}`}>
            <h3 data-testid="filter-title" className={`${styles['col']} ${styles['title']}`}>{FILTERS.Filters}</h3>
            <div className={`${styles['col']}`}>
                <PriceFilter maxValue={filters.maxPrice} minValue={filters.minPrice} handleChange={handlePriceChange}/>
            </div>
            <div data-testid="star-filter-container" className={`${styles['col']}`}>
                <StarFilter handleChange={handleStarRatingChange} availableRatings={filters.starRatings || []}/>
            </div>
            <div className={`${styles['col']}`}>
                <FacilitiesFilter facilities={filters.facilities} handleChange={handleFacilitiesUpdate}/>
            </div>
            <div className={`${styles['col']}`}>
                <ButtonComponent data-testid="filter-apply" className={`${styles['button']}`} onClick={applyFilters} text={FILTERS.Apply}/>
            </div>
        </div>
    )
}