import './styles.css'
import  logo  from './logo-crefisa.jpeg';
import { useState } from 'react';

const Card_negocition = () =>{
const [Dropdown , SetDropdown] = useState(false)
const [ArrowFontWesome, SetArrowFontWesome] = useState('fa fa-arrow-down')

function dropdown(){
    if(Dropdown){
        SetDropdown(false)
        SetArrowFontWesome('fa fa-arrow-down')
    }else{
        SetDropdown(true)
        SetArrowFontWesome('fa fa-arrow-up')
       
    }
}



return (
    <div>
    <div className='container_negociation'>
    <div className='card_negocition'>
        <div className='empresa'>
            <img src={logo} alt='empresa'/>
        </div>

        <div className='meta'>
            <h2>Meta</h2>
            <h3>R$ 15.000</h3>
        </div>

        <div className='valor'>
            <h2>Negociado</h2>
            <h3>R$ 14.500</h3>
        </div>

        <div className='conversao'>
            <h2>Conversão</h2>
            <h3>97%</h3>
        </div>

        <button className='buttondropdown' onClick={dropdown}>
            <i className={ArrowFontWesome}></i>
        </button>
        </div>

        {Dropdown?
        <>
        <div className='dropdown'>
         <div >
         <h4>Crefisa Sem Bloqueio</h4>
         </div>
 
         <div >
         <h3>R$ 7.500</h3>
         </div>
 
         <div >
             <h3>R$ 7.250</h3>
         </div>
 
         <div >
             <h3>97%</h3>
         </div>
       </div>
       <div className='dropdown'>
         <div >
         <h4>Crefisa Com Bloqueio</h4>
         </div>
 
         <div >
         <h3>R$ 7.500</h3>
         </div>
 
         <div >
         <h3>R$ 7.250</h3>
         </div>
 
         <div >
             <h3>97%</h3>
         </div>
       </div>
       </>
        :<></>}
            
        </div>
        </div>
    
)

}

export default Card_negocition;