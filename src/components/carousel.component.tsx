import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { HotelContent, Image } from '../types/booking';
import * as styles from './carousel.module.less'
import { CAROUSEL } from '../consts/carousel'
import {ButtonComponent} from './button.component'



export default function Carousel(props : HotelContent): JSX.Element {
    const [imagestore, setImagestore] = useState<Image[]>([{url : CAROUSEL.url}]);
    const [currentImage, setCurrentImage] = useState(CAROUSEL.defaultImage);

    useEffect(() => {
        const newImages : Image[]= props.images.map(x => {
            return {url : x.RESULTS_CAROUSEL.url}
        });

        setImagestore(newImages);
    }, [props.images]);

    const scrollCarousel = (scrollBy)=>{
        let newIndex = currentImage + scrollBy;
        newIndex = newIndex<0 ? props.images.length-1 : newIndex;
        newIndex = newIndex>props.images.length-1 ? 0 : newIndex;

        setCurrentImage(newIndex);
    }
    
    return (
        <div data-testid={`carousel`} className={`${styles['carousel']}`} >
            <img src={imagestore[currentImage].url} alt="Hotel Image"/>
            <ButtonComponent className={`${styles['prev']}`} onClick={() => {scrollCarousel(CAROUSEL.minusOne)}} text="&#11164;"/>
            <ButtonComponent className={`${styles['next']}`} onClick={() => {scrollCarousel(CAROUSEL.plusOne)}} text="&#11166;"/>
        </div>
    );
}