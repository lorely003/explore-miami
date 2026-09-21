function PlaceCard(props){
    return(
        <div className="place-card">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>   
            <p>{props.category}</p>
            <p>Location: {props.location}</p>
            <p>{props.description}</p>
            <a href={props.link}>Learn More</a>
        </div>
    )
}

export default PlaceCard