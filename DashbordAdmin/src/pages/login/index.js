import './styles.css'
import IgmAnalytics  from '../../assets/imgs/undraw_All_the_data_re_hh4w.svg'
import { useState } from 'react'
import api from '../../service/api'
import { useHistory, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const [Login , SetLogin] = useState('')
    const [Password, SetPassword] = useState('')
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault()
        const loginto = {
            login: Login,
            password: Password
        }
        const validatingTokken = await api.post('/login', loginto);

        if(validatingTokken.data.access === true){ 
                await history.push('/main',{
                id:validatingTokken.data.id,
                tokken:validatingTokken.data.token, 
                user: validatingTokken.data.user })
        }else {
    
        await toast.error("Email/Senha incorreto");
        }
    }


    return(
        <div id="container_login">
            <div className="container_left">
                <h1>WinoTech</h1>
                <img src={IgmAnalytics} alt='analytics'/>
             </div>
            <div className="container_right">
                <form onSubmit={handleLogin}>
                        <h1>Bem vindo</h1>
                        <input 
                            className="users" 
                            type='text' 
                            placeholder='Usuario'
                            value={Login} 
                            onChange={event => SetLogin(event.target.value)}
                        />
                        <input 
                            className="password" 
                            type='password' 
                            placeholder='*******'
                            value={Password} 
                            onChange={event => SetPassword(event.target.value)}
                            
                            />   
                        <Link className='forget' to={'/'} >Esqueceu a Senha?</Link>
                        <button className='submitButton' type='submit'>Entrar</button>
                        
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;