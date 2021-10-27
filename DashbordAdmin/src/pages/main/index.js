import Welcome from '../../components/welcome'
import Structure  from '../../components/Structure'
import Card_negocition from '../../components/card_negocition'

const Main = ({history}) =>{
    if(!history.location.state){
        window.location.href = "/";
    }

    const UserAuth = history.location.state
    console.log(UserAuth)
   
    return (
        <Structure>
    
            <Welcome name={UserAuth.user.name}/>
             
                <div className='charts'>
                    
                    <Card_negocition/>
                    <Card_negocition/>
                    <Card_negocition/>
                    <Card_negocition/>
                </div>
            
        </Structure>
    )
}

export default Main