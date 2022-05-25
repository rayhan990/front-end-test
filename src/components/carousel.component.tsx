import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks';
import { HotelImage } from '../types/booking';
import * as styles from './carousel.module.less'
import { IMAGES } from '../consts/carousel'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export default function Carousel({images} : HotelImage[]): JSX.Element {
    const [imagestore, setImagestore] = useState([{url : IMAGES.NoImageUrl, desc : IMAGES.NoImageDesc}]);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const newImages = images.map(x => {
            return {url : x.RESULTS_CAROUSEL.url, desc : x.IMAGE_DESCRIPTION}
        });

        setImagestore(newImages);
    }, [images]);

    const scrollCarousel = (scrollBy)=>{
        let newIndex = currentImage + scrollBy;
        newIndex = newIndex<0 ? images.length-1 : newIndex;
        newIndex = newIndex>images.length-1 ? 0 : newIndex;

        setCurrentImage(newIndex);
    }
    
    return (
        <div className={`${styles['carousel']}`} >
            <img src={imagestore[currentImage].url} alt={imagestore[currentImage].desc}/>
            <div className={`${styles['next']}`} onClick={() => scrollCarousel(1)}>
                <FaArrowAltCircleRight/>
            </div>
            <div className={`${styles['prev']}`} onClick={() => {scrollCarousel(-1)}}>
                <FaArrowAltCircleLeft/>
            </div>
        </div>
    );
}