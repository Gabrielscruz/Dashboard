import './styles.css'
const Container_right_chart = ({title, subtitle, content}) => {
    return (
        <div className='charts__right'>

            <div className='charts__right__title'>
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

export default Container_right_chart