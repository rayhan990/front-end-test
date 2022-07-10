import { h, JSX } from 'preact'
import * as styles from './multiselect.module.less'
import { useState, useEffect, useRef } from 'preact/hooks';
import Select from 'react-select';
import { MULTISELECT } from '../consts/multiselect'

type Options = {
    label : string,
    value: string
}

type RatingProps = {
  options: Options[],
  onChange : (facilities : String[]) => void,
  className?: String,
  "data-testid"?: String
}

export default function Multiselect(props : RatingProps): JSX.Element {
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const inpref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
          if (inpref.current && !inpref.current.contains(event.target as Node) && open) {
            onSelect();
          }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const onSelect = () => {
        setOpen(!open);
    }

    const onChange = (e) => {
        setSelected(selected => {
            const index = selected.indexOf(e.target.id);
            
            if(index>=0){
                selected.splice(index,1)
            }else if(e.target.id){
                selected.push(e.target.id);
            }

            props.onChange(selected);
            return selected;
        })
    }

    return (
        <div data-testid={props['data-testid']} className={`${styles['multiselect']} ${props?.className || ""}`} ref={inpref}>
            <div className={`${styles['selectBox']}`} >
                <select>
                    <option data-testid="option-text" className={`${styles['option']}`}>{selected.join(', ') || MULTISELECT.DefaultSelection}</option>
                </select>
                <div onClick={onSelect} className={`${styles['overSelect']}`} />
            </div>
            <div data-testid="multiselect-options" className={`${styles['options']} ${open ? styles['show'] : ""}`}>
                {
                    props.options.map((option,i) => {
                        return (
                            <label for={option.value} onClick={onChange}>
                                <input type="checkbox" checked={selected.includes(option.value)} id={option.value}/>{option.label}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}