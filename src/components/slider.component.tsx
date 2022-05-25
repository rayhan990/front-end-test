import { h, JSX } from 'preact'
import * as styles from './slider.module.less'
import { useState, useEffect } from 'preact/hooks';
import ReactSlider from "react-slider";

type SliderProps = {npm audit fi
  maxValue: Integer,
  minValue: Integer,
  handleChange: function
}

export default function HolidayInfo(props : SliderProps): JSX.Element {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        setMinValue(props.minValue);
        setMaxValue(props.maxValue);

    }, [props.minValue, props.maxValue]);

    const onChange = (values) => {
        setMinValue(values[0]);
        setMaxValue(values[1]);

        props.handleChange(values[0], values[1])
    }

    return (
        <ReactSlider
            min={props.minValue}
            max={props.maxValue}
            value={[minValue, maxValue]}
            className={`${styles["horizontal-slider"]}`}
            thumbClassName={`${styles["example-thumb"]}`}
            trackClassName={`${styles["example-track"]}`}
            onChange={onChange}
            renderThumb={(props, state) => <div {...props}><span>£{state.valueNow}</span></div>}
        />
    )
}
