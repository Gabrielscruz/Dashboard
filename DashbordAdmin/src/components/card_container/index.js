import './styles.css'
const Card_container = ({title , value}) => {
    return (
        <div className="card_container">
            <h1>{title}</h1>
            <p>{value}</p>
        </div>
    )

}

export default Card_container