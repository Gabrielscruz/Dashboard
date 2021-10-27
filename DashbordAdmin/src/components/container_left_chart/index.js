import './styles.css'

const Container_left_chart = ({title , subtitle , content}) =>{
    return (
        <div className='charts__left'>

                        <div className='charts__left__title'>
                            <div>
                                <h1>{title}</h1>
                                <p>{subtitle}</p>
                            </div>
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>

                        {content}

        </div>
    )
}

export default Container_left_chart