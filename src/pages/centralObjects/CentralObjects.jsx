import {Link, useParams} from "react-router-dom";
import './CentralObjects.scss';
import {FaArrowLeft} from "react-icons/fa6";
import ImageSlider from "../../components/imageSlider/ImageSlider.jsx";
import {useState} from "react";

const CentralObjects = ({data}) => {

    const objectId = useParams().object;
    const ReligiousObject = data.find((object) => object.name.toLowerCase().replaceAll(" ","-") === objectId)
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    return (
        <div style={{padding: '20px 0'}}>
            <Link to="/srednja-regija" className="go-back" onClick={scrollToTop}>
                <div className="button">
                    <FaArrowLeft />
                </div>
                <p>Idi nazad</p>
            </Link>
            <div style={{margin: '20px 30px', fontFamily:'Roboto Serif', fontStyle:'italic'}}>
                <h2>{ReligiousObject.name}</h2>
                <p style={{color:'grey'}}>Objavljeno: {ReligiousObject.date}</p>
            </div>

            <div className="container">
                <div className="image">
                    <ImageSlider images={ReligiousObject.images}
                                 currentIndex={currentIndex}
                                 setCurrentIndex={setCurrentIndex}
                                 imgUrl={ReligiousObject.images[currentIndex].image}
                    />
                </div>
                <div className="paragraphs">
                    <div className="description" >
                        {
                            ReligiousObject.descriptions?.map((description) => {
                                return (
                                    <p key={description?.id}>{description?.description}</p>
                                )
                            })
                        }
                    </div>
                    <div className="sources">
                        {
                            ReligiousObject.sources?.map((source) => {
                                return (
                                    <p key={source?.id}>{source?.source}</p>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CentralObjects;