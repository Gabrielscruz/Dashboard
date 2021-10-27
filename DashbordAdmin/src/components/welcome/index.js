import './styles.css'
import hello from '../../assets/imgs/Hello.svg'

const Welcome = ({name}) => {
    return (
    <div className='main__title'>
        <img src={hello} alt='hello'/>
        <div className='main__greeting'>
            <h1>Olá {name}</h1>
            <p>Bem vindo ao seu painel</p>
        </div>
    </div>

    )
}

export default Welcome