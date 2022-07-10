import { h, JSX } from 'preact'
import * as styles from './pricefilter.module.less'
import { useState, useEffect } from 'preact/hooks';
import { PRICEFILTER } from '../consts/pricefilter'

type SliderProps = {
  maxValue: number,
  minValue: number,
  handleChange: (v1:number, v2:number) => void
}

export default function HolidayInfo(props : SliderProps): JSX.Element {
    const [values, setValue] = useState({minValue : PRICEFILTER.DefaultMin, maxValue: PRICEFILTER.DefaultMax});

    useEffect(() => {
        setValue({minValue : props.minValue, maxValue : props.maxValue});
    }, [props.minValue, props.maxValue]);

    const handleChange = (e) => {
        setValue(newValues => {
            newValues[e.target.id] = e.target.value;
            props.handleChange(newValues.minValue, newValues.maxValue);

            return newValues;
        });
    }

    const thumbs = (props, state) => <div {...props}><em>£{state.valueNow}</em></div>;

    return (
        <div data-testid="price-filter-container" className={`${styles['price-filter-container']}`}>
            <label data-testid="min-label" for="minValue">{PRICEFILTER.Min} {PRICEFILTER.Currency}</label>
            <input 
                data-testid="min-value"
                value={values.minValue}
                placeholder={`${PRICEFILTER.Min} ${props.minValue}`}
                id="minValue"
                name="minValue"
                onChange={handleChange}/>

            <label data-testid="max-label" for="maxValue">{PRICEFILTER.Max} {PRICEFILTER.Currency}</label>
            <input
                data-testid="max-value"
                value={values.maxValue}
                id="maxValue"
                placeholder={`${PRICEFILTER.Max} ${props.maxValue}`}
                name="maxValue"
                onChange={handleChange}/>
        </div>
    )
}
