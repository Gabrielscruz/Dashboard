import Chart    from '../../components/chart'
import Card     from '../../components/card'
import Card_container from '../../components/card_container'
import Welcome from '../../components/welcome'
import Container_left_chart from '../../components/container_left_chart'
import Container_right_chart from '../../components/container_right_chart'
import Structure  from '../../components/Structure'

const Main = ({history}) =>{
    if(!history.location.state){
        window.location.href = "http://localhost:3000/";
    }

    const UserAuth = history.location.state
   
    return (
        <Structure>
      

            <Welcome name={UserAuth.user.name}/>
                <div className='main_cards'>
                    <Card fontwesome={'fas fa-border-all fa-2x text-lightblue'}  title={'Registros'}           numero={1000}/>
                    <Card fontwesome={'fas fa-file-alt fa-2x text-lightblue'}  title={'Pedidos'} numero={700}/>
                    <Card fontwesome={'fas fa-money-bill-wave fa-2x text-green'} title={'Pagamentos'}        numero={280}/>
                    <Card fontwesome={'fas fa-minus-circle fa-2x text-red'}          title={'Categorias'}        numero={40} />
                    
                </div>
                <div className='charts'>
                    <Container_left_chart  title={'Daily Reports'} subtitle={'Mogi das Cruzes, São Paulo, BR'} content={<Chart />} />
                    <Container_right_chart title={'Daily Reports'} subtitle={'Mogi das Cruzes, São Paulo, BR'}
                        content = { 

                            <div className="charts__rigth__cards">
                                <Card_container title={'Pagamentos'} value={80}/>
                                <Card_container title={'Custo de hospedagem'} value={25}/>
                                <Card_container title={'Banco de dados'} value={40}/>
                            </div>
                         }
                         />

                </div>
            
        </Structure>
    )
}

export default Main