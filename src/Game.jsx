

function Game(props){
    return(
        <div className="gameCard">
            <p>Name: {props.name}</p>
            <p>Release date: {props.releaseDate}</p>
            <p>Free: {props.isFree ? "Yes" : "No"}</p>
        </div>
    )
}  

export default Game