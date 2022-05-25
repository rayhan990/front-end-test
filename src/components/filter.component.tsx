import { h, JSX } from 'preact'
import * as styles from './filter.module.less'
import { Holiday } from '../types/booking';
import { useState, useEffect } from 'preact/hooks';
import Slider from "./slider.component";
import StarFilter from "./starFilter.component";
import FacilitiesFilter from "./facilitiesFilter.component";
import { FILTERS } from '../consts/filters.ts';

type FilterProps = {
  holidays: Holiday[],
  setHolidays: function
}

export default function HolidayInfo(props : FilterProps): JSX.Element {
    const [filters, setFilters] = useState(FILTERS.DefaultFilters);
    const [selectedFilters, setSelectedFilters] = useState(FILTERS.DefaultFilters);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        buildFilters();
    }, []);

    const buildFilters = () => {
        const newFilters = {maxPrice: 0, minPrice : Infinity, starRatings: new Set(), facilities : new Set()};

        props.holidays.forEach(holiday => {
            newFilters.maxPrice = Math.max(newFilters.maxPrice, holiday.pricePerPerson);
            newFilters.minPrice = Math.min(newFilters.minPrice, holiday.pricePerPerson);
            newFilters.starRatings.add(holiday.hotel.content.starRating);
            holiday.hotel.content.hotelFacilities.forEach(x => newFilters.facilities.add(x));
        })


        newFilters.starRatings = [...newFilters.starRatings].sort((x,y) => x>y);
        newFilters.facilities = [...newFilters.facilities].sort((x,y) => x>y);

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

    const handleFacilitiesUpdate = (selectedFacilities)=>{
        setSelectedFilters(selectedFilter => {
            selectedFilter.facilities = selectedFacilities.map(x => x.value);

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
                selectedFilters.starRatings.includes(holiday.hotel.content.starRating) &&
                holiday.pricePerPerson>selectedFilters.minPrice &&
                holiday.pricePerPerson<selectedFilters.maxPrice
            );
        });

        props.setHolidays(filteredHolidays);
    }

    return (
        <div className={`${styles['filterBar']}`}>
            <h3 className={`${styles['col']} ${styles['title']}`}>Filters</h3>
            <div className={`${styles['col']}`}>
                <Slider maxValue={filters.maxPrice} minValue={filters.minPrice} handleChange={handlePriceChange}/>
            </div>
            <div className={`${styles['col']}`}>
                <StarFilter starRatings={filters.starRatings} handleChange={handleStarRatingChange}/>
            </div>
            <div className={`${styles['col']}`}>
                <FacilitiesFilter facilities={filters.facilities} handleChange={handleFacilitiesUpdate}/>
            </div>
            <div className={`${styles['col']}`}>
                <button className={`${styles['button']}`} onClick={applyFilters}>Apply</button>
            </div>
        </div>
    )
}