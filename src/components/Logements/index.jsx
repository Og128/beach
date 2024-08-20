import DropDown from '../Dropdown';
import './styles.scss'
import Gallery from '../Gallery';
import Tags from '../Tag';
import Cons from '../Cons';
// import Ratings from '../Ratings';

function Logements(props) {
    return (
        <div className='container-logement' key={props.logement.id}>
            <Gallery />
            <section className='main-section'>
                <div className='section-left'>
                    <h2 className='main-title'>{props.logement.title}</h2>
                    <p className='main-location'>{props.logement.location}</p>
                    <div className='container-tags'>
                        {props.logement.tags.map((tag, idx) => {
                            return (
                                <Tags tags={tag} key={idx} />
                            )
                        })}
                    </div>
                </div>
                <div className='section-right'>
                    <div className='container-cons'>
                        {props.logement.cons.map((tag, idx) => {
                            return (
                                <Cons cons={tag} key={idx} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='transportation'>
                <div className='departure'>
                    <h4>Departure</h4>
                    <div className='d-data'>{props.logement.departure[0]}</div>
                    {props.logement.departure[1] ?
                        (
                            <div className='tern'>or</div>
                        ) : null}
                    <div className='d-data'>{props.logement.departure[1]}</div>
                </div>
                <div className='leaving'>
                    <h4>Leaving</h4>
                    <div className="l-data">{props.logement.leaving[0]}</div>
                    <div className="tern">and</div>
                    <div className="l-data">{props.logement.leaving[1]}</div>
                </div>

            </section>
            <div className='container-dropdowns'>
                <DropDown
                    title="Description"
                    text={props.logement.description} />
                <DropDown
                    title="What to do"
                    text={<ul className='container-equipement'>{props.logement.equipments.map((item, idx) => {
                        return <li className='list-equipement' key={idx}>{item}</li>
                    })}</ul>} />
            </div>
        </div>
    )
}

export default Logements;