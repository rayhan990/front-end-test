import { h, JSX } from 'preact'
import * as styles from './facilitiesFilter.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import Select from 'react-select';

type RatingProps = {
  facilities: Integer[]|String[],
  handleChange : function
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

    return <Select className={`${styles['select']}`} options={facilities} isMulti={true} value={selected} onChange={onChange}/>;
}