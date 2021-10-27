import './styles.css'

const Card = ({ fontwesome ,title , numero}) => {
    return (
    <div className='card'>
        <i className={fontwesome}></i> 
        <div className='card-inner'>
        <p className='text-primary-p'>{title}</p>
        <span className='font-bold text-title'>{numero}</span>
        </div>
    </div>
    )
}

export default Card