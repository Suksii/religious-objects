import { FaArrowLeft } from "react-icons/fa6";
import './SouthPage.scss';
import {Link} from "react-router-dom";
const SouthPage = ({data}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    return (
        <>
            <h1 className="title">Vjerski objekti južne regije</h1>
            <Link to="/" className="go-back" onClick={scrollToTop}>
                <div className="button">
                    <FaArrowLeft />
                </div>
                <p>Idi nazad</p>
            </Link>
            <div className="objects">
                {
                    data.map((object) => {
                        return (
                            <div key={object.id} className="object">
                                <img src={object.mainImage} alt={object.name} />
                                <h2>{object.name}</h2>
                                <p>{object.descriptions[0].description}</p>
                                <Link to={`/juzna-regija/${object.name.toLowerCase().replaceAll(" ","-")}`}
                                      className="button"
                                      onClick={scrollToTop}>
                                    Detaljnije
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <p style={{textAlign:"center", fontStyle:'italic', fontWeight:'600', fontFamily:"Roboto Serif", margin: '30px 0 5px 0'}}>Iznijeti stavovi su isključivo odgovornost autora i/ili izdavača i nužno ne izražavaju stavove Fonda.</p>
        </>
    );
}

export default SouthPage;