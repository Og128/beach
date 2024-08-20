import './styles.scss'

function Cards(props) {

    return (
        <>
            <div className="card-total">
                <div className="card" key={props.id}>
                    <img className="cover-img" src={props.cover} alt={props.title} />
                    <h3 className="card-title">{props.title}</h3>
                </div>
                <div className='card-role'>{props.role}</div>
            </div>
        </>
    )
}

export default Cards;