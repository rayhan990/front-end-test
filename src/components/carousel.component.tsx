import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { HotelContent, Image } from '../types/booking';
import * as styles from './carousel.module.less'
import { IMAGES } from '../consts/carousel'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'



export default function Carousel(props : HotelContent): JSX.Element {
    const [imagestore, setImagestore] = useState<Image[]>([{url : IMAGES.url}]);
    const [currentImage, setCurrentImage] = useState(0);

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
        <div className={`${styles['carousel']}`} >
            <img src={imagestore[currentImage].url} alt="Hotel Image"/>
            <div className={`${styles['next']}`} onClick={() => scrollCarousel(1)}>
                <FaArrowAltCircleRight/>
            </div>
            <div className={`${styles['prev']}`} onClick={() => {scrollCarousel(-1)}}>
                <FaArrowAltCircleLeft/>
            </div>
        </div>
    );
}