import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {useEffect} from "react";
import './ImageSlider.scss';

const ImageSlider = ({imgUrl, currentIndex, setCurrentIndex, images}) => {

    const nextImage = () => {
        if(currentIndex < images.length - 1){
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    const previousImage = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(images.length - 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);



    return (
        <div className="container">
            <div className="images-slider">
                {images.map((image) => {
                        return (
                            <div key={image.id}
                                 className="image-slider"
                                 style={{backgroundImage:`url(${imgUrl})`, translate: `${-100 * currentIndex}%`}}>
                                {
                                    images.length > 1 && <div className="buttons">
                                    <button onClick={previousImage} className="button-left">
                                        <FaArrowLeft/>
                                    </button>
                                    <button className="button-right"
                                            onClick={nextImage}>
                                        <FaArrowRight/>
                                    </button>
                                </div>
                                }
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default ImageSlider