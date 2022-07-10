import { h, JSX } from 'preact'
import * as styles from './facilitiesFilter.module.less'
import { useState, useEffect } from 'preact/hooks';
import Multiselect from './multiselect.component';

type RatingProps = {
  facilities: String[],
  handleChange : (facilities : String[]) => void
}

export default function StarFilter(props : RatingProps): JSX.Element {
    const [facilities, setFacilities] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setFacilities(props.facilities.map(x => {return {value : x, label : x}}));
    }, [props.facilities])

    const onChange = (values) => {
        setSelected(values);
        props.handleChange(values);
    }

    return <Multiselect data-testid="multiselect" className={`${styles['select']}`} options={facilities} onChange={onChange}/>;
}