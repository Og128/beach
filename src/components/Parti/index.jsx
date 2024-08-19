import './styles.scss'

function Cards(props) {
    
    return (
        <>
            <div className="card" key={props.id}>
                <img className="cover-img" src={props.cover} alt={props.title} />
                <h3 className="card-title">{props.title}</h3>
            </div>
        </>
    )
}

export default Cards;